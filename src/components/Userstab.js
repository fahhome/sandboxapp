import React from "react";
import TaskList from "./TaskList.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask, addUser } from "../actions/action.js";
import { Button, ButtonToolbar } from "react-bootstrap";
import UsersList from "./UsersList.js";
import UserModalWindow from "./common/UserModalWindow.js";

class Userstab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
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
            Create a User
          </Button>

          <UserModalWindow
            show={this.state.showModal}
            onHide={ModalClose}
            update="false"
          />
        </ButtonToolbar>

        <UsersList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addUser }, dispatch);
}

export default connect(
  () => {},
  mapDispatchToProps
)(Userstab);