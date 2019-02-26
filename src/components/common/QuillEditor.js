import React, { Component } from "react";
import ReactQuill from 'react-quill';

class QuillEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.data || ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps, props) {
    this.setState({
      text: nextProps.data
    });
  }
  
  handleChange(value) {
    this.setState({
      text: value
    });
    console.log(value)
    if(this.props.onChange) {
      this.props.onChange(value)
    }
  }
  
  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
 
  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "10rem" }}>
        <ReactQuill 
          value={this.state.text} 
          onChange={this.handleChange}
          modules={this.modules}
          formats={this.formats} />
        
      </div>
    );
  }
}

export default QuillEditor;
