import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteUser, updateUser } from "../actions/action.js";
import UserModalWindow from "./common/UserModalWindow.js";
import {Table} from "react-bootstrap";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      rowindextoupdate: null,
      f1: "",
      f2: ""
    };
    this.ModalClose = this.ModalClose.bind(this);
    this.renderUser = this.renderUser.bind(this);
  }

  ModalClose() {
    this.setState({
      showModal: false,
      rowindextoupdate: null
    });
  }


  renderUser(user, index) {
    return (
      <tr key={index}>
        <td></td>
        <td>{user.field1}</td>
        <td>
          
        {" "}
           <button
              onClick={() => {
                   this.props.deleteUser(user.key);
                  }}
            >
              Delete
            </button>{" "}

        </td>
        <td>

        <button
            onClick={() => {
            this.setState({
                  showModal: true,
                  rowindextoupdate: user.key
                    });
                }}
        >
                      {" "}
             Update
         </button>{" "}
             

        </td>
      </tr>
    )
  }


  render() {
    console.log(this.state);
    var f1 = "";
    var f2 = "";

    if (this.state.rowindextoupdate !== null) {
        this.props.users.users.map((u) => {
        if (u.key === this.state.rowindextoupdate) {
           console.log("entered inside");
           f1 = u.field1;
           f2 = u.field2;
        }

        })
    }
    return (
      <div>
        <UserModalWindow
          show={this.state.showModal}
          onHide={this.ModalClose}
          user="true"
          update="true"
          rowindextoupdate={this.state.rowindextoupdate}
          f1prop={f1}
          f2prop={f2}
        />
        <Table>  
          <thead>
          <tr>
           <th></th>
           <th>User Name</th>
         </tr>
        </thead>
        <tbody>
          {this.props.users.users.map(this.renderUser)}
        </tbody>
       </Table>    

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteUser, updateUser }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
