import React, { Component } from "react";
import NavigationPrompt from "react-router-navigation-prompt";
import CustomModal from "./CustomModal";


class Posts extends Component {
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
          <h1>Posts is there</h1>
          <button onClick={() => { this.setState({shouldConfirmNavigation: true})}}>Click to block Navigation</button>
        </div>
        <NavigationPrompt when={this.state.shouldConfirmNavigation}>
          {({ onConfirm, onCancel }) => (
              <CustomModal onConfirm={onConfirm}
               onCancel={onCancel}
               isOpen={this.state.shouldConfirmNavigation} />)}
        </NavigationPrompt>
      </React.Fragment>
    );
  }
}

export default Posts;
