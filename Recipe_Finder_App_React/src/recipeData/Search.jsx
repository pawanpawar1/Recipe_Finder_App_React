import React, { useState } from "react";
import { Form, Grid, Input } from "semantic-ui-react";

function Search({ setSearchQuery }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onFormSubmit = () => {
    if (value === "") {
      setError("Please enter at least one ingredient.");
    } else {
      setSearchQuery(value);
      setError("");
    }
  };

  return (
    <Grid column={2} textAlign="center" className="search-box">
      <Grid.Column>
        <h2 className="search-heading">
          Search Recipes with{" "}
          <span style={{ color: "#2185D0" }}>Our Recipe</span>
        </h2>
        <h4>Input Recipes seperated by comma</h4>
        <Form onSubmit={onFormSubmit}>
          <Input
            placeholder="tomato,potato,pizza"
            action={{ icon: "search", color: "blue" }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          {error && (
            <div style={{ color: "red", marginTop: "5px" }}>{error}</div>
          )}
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Search;
