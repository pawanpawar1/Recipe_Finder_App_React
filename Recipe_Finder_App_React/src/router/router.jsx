import { createBrowserRouter } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import RecipeDetails from "../recipeData/RecipeDetails";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "recipes", element: <Recipes /> },
      { path: "recipes/:recipeId", element: <RecipeDetails /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
