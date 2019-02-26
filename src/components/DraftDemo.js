import React, { Component } from "react";
import DraftEditor from "./common/DraftEditor";
let data = '';

class DraftDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldConfirmNavigation: false,
      editorData: ''
    };
    this.saveText = this.saveText.bind(this);
    this.loadText = this.loadText.bind(this);
  }
  saveText() {
    data = this.state.editorData;
  }
  loadText() {
    this.setState({editorData: data});
  }

  render() {
    return (
      <React.Fragment>
        <h1> Draft Test Environment </h1>
        <button onClick={this.saveText}> Save </button>
        <button onClick={this.loadText}> Load Saved Data </button>
        <DraftEditor data={this.state.editorData} onChange={(data) => {this.setState({editorData: data})}}/>
      </React.Fragment>
    );
  }
}

export default DraftDemo;
