import React, { Component } from "react";
import ReactQuill,  { Quill, Mixin, Toolbar }   from 'react-quill';

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

  componentDidMount() {
    // Toolbar.addHandler('image', () => { alert(' new image uploaded')})
    // console.log(this.quillRef);
  }
  
  handleChange(value) {
    this.setState({
      text: value
    });
    // console.log(value)
    if(this.props.onChange) {
      this.props.onChange(value)
    }
  }
  
  imageHandler = (image, callback) => {
    const self = this;
    const editor = self.quillRef.getEditor();
    // let fileInput = self.quillRef.getEditor().container.querySelector('input.ql-image[type=file]');
    // if (fileInput == null) {
    const fileInput = document.createElement('input');
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
            var reader = new FileReader();
            reader.onload = function (e) {
              var range = editor.getSelection(true);
              // editor.updateContents(editor.getContents().retain(range.index).delete(range.length).insert({ image: e.target.result }), "user");
              editor.setContents(editor.getContents().delete(range.length).insert({ image: e.target.result }), "user");
              editor.setSelection(range.index + 1, "silent");
              fileInput.value = "";
            };
            reader.readAsDataURL(fileInput.files[0]);
          } else {
            alert("You exceeded the max size limit");
          }
        }
      });
      // this.container.appendChild(fileInput);
      editor.container.appendChild(fileInput);
      // console.log(self.quillRef);
    // }
    fileInput.click();
  }

  modules = {
    toolbar: {
      container: [
        { 'header': [1, 2, false] },
        'bold', 'italic', 'underline','strike', 'blockquote',
        {'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'},
        'link', 'image',
        'clean'
      ],
      handlers: {
        // handlers object will be merged with default handlers object
        // image: this.imageHandler
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
          ref={(el) => this.quillRef = el}/>
        
      </div>
    );
  }
}

export default QuillEditor;
