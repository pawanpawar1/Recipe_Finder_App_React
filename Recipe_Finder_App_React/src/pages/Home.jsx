import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-image">
      <div className="text-content">
        <h1 className="header-title">Our Recipes</h1>
        <Button
          content="SEARCH RECIPES"
          color="blue"
          as={Link}
          to="/recipes"
          size="big"
        />
      </div>
    </div>
  );
}

export default Home;
