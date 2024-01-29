import React, { useEffect, useState } from "react";
import Search from "../recipeData/Search";
import RecipeList from "../recipeData/RecipeList";
import axios from "axios";

function Recipes() {
  const [searchQuery, setSearchQuery] = useState("pizza");
  const [recipes, setRecipes] = useState([]);

  const getSearch = async () => {
    let url = "https://forkify-api.herokuapp.com/api/search?q=";
    try {
      const response = await axios.get(`${url}${searchQuery}`);
      // console.log(response.data);
      if (response && response.data.recipes) {
        setRecipes(response.data.recipes);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setRecipes([]);
    }
  };

  useEffect(() => {
    getSearch();
  }, [searchQuery]);

  return (
    <>
      <Search setSearchQuery={setSearchQuery} />
      <RecipeList recipes={recipes} searchQuery={searchQuery} />
    </>
  );
}

export default Recipes;
