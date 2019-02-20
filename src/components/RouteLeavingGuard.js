import React from 'react';
import {Prompt, Redirect} from 'react-router-dom';
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


export class RouteLeavingGuard extends React.Component {
 state = {
   modalVisible: false,
   lastLocation: null,
   confirmedNavigation: false,
 }
 showModal = (location) => this.setState({
   modalVisible: true,
   lastLocation: location,
 })
 closeModal = (callback) => this.setState({
   modalVisible: false
 }, callback)
 handleBlockedNavigation = (nextLocation) => {
   const {confirmedNavigation} = this.state
  //  const {shouldBlockNavigation} = this.props
   if (!confirmedNavigation && this.props.when){
       this.showModal(nextLocation)
       return false
   }
   
   return true
 }
 handleConfirmNavigationClick = () => this.closeModal(() => {
  //  const {navigate} = this.props
   const {lastLocation} = this.state
   if (lastLocation) {
      this.setState({
         confirmedNavigation: true
      }, () => {
         // Navigate to the previous blocked location with your navigate function     
        //  navigate(lastLocation.pathname)
      })
   }
 })
 render() {
   const {when} = this.props
   const {modalVisible, confirmedNavigation, lastLocation} = this.state
   if (confirmedNavigation) {
     return  <Redirect to={`${lastLocation.pathname}`} />;
   }
   return (
     <React.Fragment>
        <Prompt
           when={when}
           message={this.handleBlockedNavigation}/>
        <Modal
              isOpen={modalVisible}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
              <button onClick={() => this.closeModal(()=> {})}>close</button>
              <div>I am a modal</div>
                <button onClick={this.handleConfirmNavigationClick}>Confirm </button>
                <button onClick={() => this.closeModal(()=> {})} >stays</button>
                <button>Extra inside</button>
                <button>Extra the modal</button>
            </Modal>
     </React.Fragment>
   )
 }
}
export default RouteLeavingGuard