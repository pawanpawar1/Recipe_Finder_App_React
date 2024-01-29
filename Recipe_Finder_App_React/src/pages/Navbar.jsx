import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, Outlet } from "react-router-dom";
import logo from "../asset/logo.jpg";
import Footer from "./Footer";

function Navbar() {
  return (
    <>
      <Menu
        borderless
        fixed="top"
        style={{
          backgroundColor: "chocolate",
          color: "white",
          fontSize: "x-large",
        }}
      >
        <Menu.Item style={{ backgroundColor: "#fff" }}>
          <img src={logo} alt="logo" style={{ width: 110, height: 75 }} />
        </Menu.Item>
        <Menu.Item
          name="Home"
          position="right"
          as={Link}
          to="/"
          style={{ color: "white" }}
        />
        <Menu.Item
          name="Recipes"
          position="right"
          as={Link}
          to="/recipes"
          style={{ color: "white" }}
        />
        <Menu.Item
          name="My Recipe App"
          position="right"
          style={{ backgroundColor: "#fff", color: "black", fontWeight: 900 }}
        />
      </Menu>
      <Outlet />
      <Footer />
    </>
  );
}

export default Navbar;
