import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  active = {
    fontWeight: "bold",
    color: "red"
  };

  header = {
    display: "flex",
    justifyContent: "space-evenly",
    listStyle: "none"
  };
  render() {
    return (
      <div style={this.header}>
        <NavLink exact to="/" activeStyle={this.active}>
          Home
        </NavLink>
        <NavLink to="/posts" activeStyle={this.active}>
          Posts
        </NavLink>
        <NavLink to="/newposts" activeStyle={this.active}>
          NewPost
        </NavLink>
        <NavLink to="/quilldemo" activeStyle={this.active}>
          Quill Demo
        </NavLink>
        <NavLink to="/draftdemo" activeStyle={this.active}>
          Draft Demo
        </NavLink>
        <NavLink to="/treeboxDemo" activeStyle={this.active}>
          Tree Example
        </NavLink>
      </div>
    );
  }
}

export default Header;
