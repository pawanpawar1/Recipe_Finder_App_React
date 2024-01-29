import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

function RecipeList({ recipes, searchQuery }) {
  return (
    <Container>
      <Header
        size="huge"
        content={`Recipe List with ${searchQuery}`}
        textAlign="center"
        style={{ color: "white" }}
      />
      {recipes && recipes.length > 0 ? (
        <Grid columns={4} doubling>
          {recipes.map((recipe) => (
            <Grid.Column key={recipe.recipe_id}>
              <RecipeListItem recipe={recipe} />
            </Grid.Column>
          ))}
        </Grid>
      ) : (
        <Header
          size="large"
          content={`No results found for ${searchQuery}`}
          textAlign="center"
          style={{ color: "yellow", marginTop: "20px" }}
        />
      )}
    </Container>
  );
}

export default RecipeList;
