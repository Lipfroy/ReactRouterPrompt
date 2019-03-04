import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import Posts from "../components/Posts";
import Header from "../header";
import NewPosts from "../components/NewPost";
import QuillDemo from "../components/QuillDemo";
import DraftDemo from "../components/DraftDemo";
import TreeDemo from "../components/TreeDemo";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={App} />
        <Route  path="/posts" component={Posts} />
        <Route  path="/newposts" component={NewPosts} />
        <Route  path="/quilldemo" component={QuillDemo} />
        <Route  path="/draftdemo" component={DraftDemo} />
        <Route  path="/treeboxDemo" component={TreeDemo} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
