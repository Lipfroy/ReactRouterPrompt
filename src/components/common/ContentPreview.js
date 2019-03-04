import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ContentPreview extends Component {
  processText = (content) => {
    if(content) {
        // content = content.replace(/<p>/gi, "<pre>").replace(/<\/p>/gi, "</pre>");
        // .replace(/ {1,}/g," ");
        // content = content.replace(/ {3,}(.*?)/g, "<pre>$1</pre>");
        return content;
    }
    return '';
  }
  
  render() {
    const { content, title } = this.props
    return (
      <div className="contentPreview">
        <div className="title">
           { title ? <h3>{title} </h3> : null}
        </div>
        <div className="content-area" dangerouslySetInnerHTML={{__html: this.processText(content)}}></div>
      </div>
    );
  }
}

ContentPreview.propTypes = {
    content: PropTypes.element.isRequired,
    title: PropTypes.string
}

ContentPreview.defaultProps = {
    content: '',
    title: ''
}