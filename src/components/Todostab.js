import React from "react";
import TaskList from "./TaskList.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask } from "../actions/action.js";
import { Button, ButtonToolbar } from "react-bootstrap";
import TaskModalWindow from "./TaskModalWindow.js";

class Todostab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick(event) {
    event.preventDefault();
  }

  render() {
    let ModalClose = () => this.setState({ showModal: false });
    return (
      <div>
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >
            Create a ToDO
          </Button>

          <TaskModalWindow
            show={this.state.showModal}
            onHide={ModalClose}
            update="false"
          />
        </ButtonToolbar>

        <TaskList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask }, dispatch);
}

export default connect(
  () => {},
  mapDispatchToProps
)(Todostab);
