import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser, updateUser, loadoff, loadon } from '../../actions/action.js';
import { Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";

class UserModalWindow extends React.Component {

  constructor(props) {

    console.log('in constructor');
    console.log(props)
    super(props);

    this.state = {
      loading: false,
      update: this.props.update,
      rowindex: this.props.rowindextoupdate,
      nameerror : null,
      mailerror : null
    }

    this.toggleup = this.toggleup.bind(this);
    this.toggledown = this.toggledown.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleMail = this.handleMail.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('in derived');
    console.log(props);
    return { rowindex: props.rowindextoupdate };
  }

  toggleup() {
    this.setState({
      loading: true
    })
  }

  handleName(event){
      
       var val  = event.target.value;
       if(null === val || '' === val){      
            this.setState({
                nameerror : '* Please enter your Name!'
            })
           
       }
       else{
           
           this.setState({
               nameerror : null 
           })

       }
  }

  handleMail(event){
      
      var val = event.target.value ;
      if(null === val || '' ===  val){
          this.setState({
              mailerror : '* Please enter your email ID !'
          })
      }

      else{
           let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           if(!re.test(val)){
               
                this.setState({
                     mailerror : '* Please enter a VALID email ID !'
                })

           }

           else{
               
               this.setState({
                  mailerror : null
               })

           }

      }

  }

  toggledown() {
    this.setState({
      loading: false
    })
  }

  render() {

    console.log('in user Modal Window');
    console.log(this.state)

    async function wait(duration = 2000) {
      await new Promise(resolve => setTimeout(resolve, duration));
    }



    return (

      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter2">
            Add New User
              </Modal.Title>
        </Modal.Header>


        <Modal.Body>

          <div className="container">

            <Form.Group controlId="UName">
              <Form.Label>User name</Form.Label>
              <Form.Control
                ref="usernameref"
                type="text"
                name="userfield1"
                onChange={this.handleName}
                defaultValue={this.props.f1prop}
              />
              <Form.Label  style={{color:'red'}}>{this.state.nameerror}</Form.Label>
            </Form.Group>
            
            <Form.Group controlId="UMail">
              <Form.Label>User Mail</Form.Label>
              <Form.Control
                ref="usermailref"
                type="text"
                onChange={this.handleMail}
                name="userfield2"
                defaultValue={this.props.f2prop}
              />
              <Form.Label  style={{color:'red'}}  >{this.state.mailerror}</Form.Label>
            </Form.Group>

            <Button loading={this.props.loader.loading} onClick={async () => {

              if(null === this.state.nameerror  &&  null === this.state.mailerror){
              var obj = {};
              obj.field1 = this.refs.usernameref.value;
              obj.field2 = this.refs.usermailref.value;
              obj.key = uuidv4();

              this.props.loadon();
              await wait();
              this.props.loadoff();

              if (this.state.update === 'true') {
                obj.key = this.state.rowindex;
                this.props.updateUser(obj);
              }
              else
                this.props.addUser(obj);

              this.props.onHide();
            }

            }}
            > Save</Button>

          </div>
        </Modal.Body>
      </Modal>

    )

  }

}


function mapStateToProps(state) {

  return {
    loader: state.loader
  }

}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addUser, updateUser, loadon, loadoff }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserModalWindow);