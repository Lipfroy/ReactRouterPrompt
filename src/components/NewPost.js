import React, { Component } from "react";
import RouteLeavingGuard from "./RouteLeavingGuard";

class NewPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldConfirmNavigation: false
    }
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ textAlign: "center",marginTop:'10rem' }}>
          <h1>NewPosts is there</h1>
          <button onClick={() => { this.setState({shouldConfirmNavigation: true})}}>Click to block Navigation</button>
        </div>
        <RouteLeavingGuard when={this.state.shouldConfirmNavigation} 
              shouldBlockNavigation={(location)=>{
                console.log(location);
                return location.pathname === '/';
              }}>
        </RouteLeavingGuard>
      </React.Fragment>
    );
  }
}

export default NewPosts;
