import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Grid, Button, Image, Header, Segment } from "semantic-ui-react";
import axios from "axios"; // Import axios

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();

  const fetchRecipe = async (searchedQuery) => {
    const API_URL = "https://forkify-api.herokuapp.com/api";
    try {
      let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`);
      return response.data;
    } catch (error) {
      console.error("Error while calling the API ", error.message);
      return { error: error.message };
    }
  };

  useEffect(() => {
    const getData = async () => {
      let result = await fetchRecipe(recipeId);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, [recipeId]);

  return Object.keys(recipe).length > 0 ? (
    <Grid container stackable columns={2} className="detailsPageContent">
      <Grid.Column>
        <Button
          as={Link}
          to={"/recipes"}
          content="Back to recipe List"
          color="yellow"
          style={{ marginBottom: 40 }}
        />
        <Image src={recipe.image_url} />
      </Grid.Column>
      <Grid.Column>
        <Header size="medium">{recipe.title}</Header>
        <p>Provided By: {recipe.publisher}</p>
        <Button
          as={"a"}
          href={recipe.publisher_url}
          target="_blank"
          content="Publisher Webpage"
          color="blue"
        />
        <Button
          as={"a"}
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
        />
        <Header size="large" content="Ingredients" />
        <Segment.Group>
          {recipe.ingredients &&
            recipe.ingredients.map((data, index) => (
              <Segment key={index}>
                <h5>{data}</h5>
              </Segment>
            ))}
        </Segment.Group>
      </Grid.Column>
    </Grid>
  ) : null;
};

export default RecipeDetails;
