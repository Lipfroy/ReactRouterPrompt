import React, { Component } from "react";
import QuillEditor from "./common/QuillEditor";
import ContentPreview from "./common/ContentPreview";
let data = '';

class QuillDemo extends Component {
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
        <h1> React  Quill Test Environment </h1>
        <button onClick={this.saveText}> Save </button>
        <button onClick={this.loadText}> Load Saved Data </button>
        <QuillEditor data={this.state.editorData} onChange={(data) => {this.setState({editorData: data})}}/>
        <ContentPreview content={this.state.editorData} title={"Live Preview"}/>
      </React.Fragment>
    );
  }
}

export default QuillDemo;
