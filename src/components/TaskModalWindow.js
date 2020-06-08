import React from "react";
import { Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask, updateTask, loadoff, loadon } from "../actions/action.js";
import { Button } from "antd";
import { v4 as uuidv4 } from 'uuid';
class TaskModalWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      update: this.props.update,
      rowindex: this.props.rowindextoupdate,
      taskerror : null
    };

    this.toggleup = this.toggleup.bind(this);
    this.toggledown = this.toggledown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTask = this.handleTask.bind(this);
  }


  handleTask(event){
      
    var val = event.target.value ;
    if(null === val || '' === val){
        this.setState({
           taskerror : '* Please enter your task !'
        })
    }
    else{
        this.setState({
           taskerror : null
        })
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { rowindex: props.rowindextoupdate };
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleup() {
    this.setState({
      loading: true
    });
  }

  toggledown() {
    this.setState({
      loading: false
    });
  }
  render() {
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
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Todo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Form.Group controlId="TDesc">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                ref="taskref"
                type="text"
                name="pef1"
                defaultValue={this.props.f1prop}
                onChange={this.handleTask}
              />
              <Form.Label style={{ color: 'red' }}>{this.state.taskerror}</Form.Label>
            </Form.Group>

            <Form.Group controlId="DA">
              <Form.Label>Date Added</Form.Label>
              <Form.Control
                ref="dateref"
                type="date"
                name="pef2"
                defaultValue={this.props.f2prop}
                onChange={this.handleChange}
                required
                placeholder="Date Added"
              />
            </Form.Group>

            <Button
              loading={this.props.loader.loading}
              onClick={async () => {
                var obj = {};
                
               
                if(null === this.state.taskerror){

                obj.field1 = this.refs.taskref.value;
                obj.field2 = this.refs.dateref.value;
                obj.key = uuidv4();
               
                  this.props.loadon();
                  await wait();
                  this.props.loadoff();
                  if (this.state.update === "true") {
                    obj.key = this.state.rowindex; //change
                    this.props.updateTask(obj);
                  } else {
                    this.props.addTask(obj);
                  }

                  this.props.onHide();
                }
                
              }}
            >
              Save
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    loader: state.loader
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask, updateTask, loadoff, loadon }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskModalWindow);
