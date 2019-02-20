import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import Posts from "../components/Posts";
import Header from "../header";
import NewPosts from "../components/NewPost";


class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={App} />
        <Route  path="/posts" component={Posts} />
        <Route  path="/newposts" component={NewPosts} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
