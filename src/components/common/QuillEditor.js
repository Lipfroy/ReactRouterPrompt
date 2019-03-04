import React, { Component } from "react";
import ReactQuill,  { Quill, Mixin, Toolbar }   from 'react-quill';
// import { ImageResize } from 'quill-image-resize-module';

// Quill.register('modules/imageResize', ImageResize);

class QuillEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.data || ''
    };
    this.quillRef = null;
    this.currentSize = 0;
    this.allowedSize = 1024; //in KB - 5MB
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
  
  imageHandler = (image, callback) => {
    const self = this;
    const editor = self.quillRef.getEditor();
    let fileInput = editor.container.querySelector('input.ql-image[type=file]');
    if (fileInput == null) {
      fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute('hidden', 'true');
      fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
      fileInput.classList.add('ql-image');
      fileInput.addEventListener('change', function () {
        if (fileInput.files != null && fileInput.files[0] != null) {
          const fileSize = fileInput.files[0].size;
          const sizeInMB = fileSize / 1024;
          if(self.currentSize + sizeInMB <= self.allowedSize) {
            self.currenstSize += sizeInMB;
            const reader = new FileReader();
            reader.onload = function (e) {
              const range = editor.getSelection(true);
              editor.setContents(editor.getContents().delete(range.length).insert({ image: e.target.result }), "user");
              editor.setSelection(range.index + 1, "silent");
              fileInput.value = "";
            };
            reader.readAsDataURL(fileInput.files[0]);
          } else {
            alert("You exceeded the max size limit");  // Can be replaced by the Custom Modal
          }
        }
      });
      editor.container.appendChild(fileInput);
    }
    fileInput.click();
  }

  modules = {
    toolbar: {
      container: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: {
        image: this.imageHandler
      }
    }
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
          defaultValue={this.state.text}
          modules={this.modules}
          onChange={this.handleChange}
          formats={this.formats} 
          theme="snow"
          preserveWhitespace={true}
          ref={(el) => this.quillRef = el}/>
      </div>
    );
  }
}

export default QuillEditor;
