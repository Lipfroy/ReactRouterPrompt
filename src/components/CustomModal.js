import React from 'react';
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

export const CustomModal = (props) => {
    return(
        <Modal
            isOpen={props.isOpen}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            
            <button onClick={()=> {props.onConfirm();}}>COnfirm Navigation </button>
            <button onClick={()=> {props.onCancel();}} >stays</button>
            <button>inside</button>
            <button>the modal</button>
        </Modal>
    )
  };

  export default CustomModal;