import React, { Component } from "react";
import NavigationPrompt from "react-router-navigation-prompt";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldConfirmNavigation: false
    }
  }
  getModal = (onConfirm, onCancel) =>{
    return (<Modal
      isOpen={true}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
      <button onClick={this.closeModal}>close</button>
      <div>I am a modal</div>
      
        <button onClick={()=> {onConfirm();}}>fthghg </button>
        <button onClick={()=> {onCancel();}} >stays</button>
        <button>inside</button>
        <button>the modal</button>
    </Modal>);

  }

  render() {
    return (
      <React.Fragment>
        <div style={{ textAlign: "center",marginTop:'10rem' }}>
          <h1>Posts is there</h1>
          <button onClick={() => { this.setState({shouldConfirmNavigation: true})}}>Click to block Navigation</button>
        </div>
        <NavigationPrompt when={this.state.shouldConfirmNavigation}>
          {({ onConfirm, onCancel }) => this.getModal(onConfirm, onCancel)}
        </NavigationPrompt>
      </React.Fragment>
    );
  }
}

export default Posts;
