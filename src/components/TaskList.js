import React from "react";
import {Table} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteTask, updateTask } from "../actions/action.js";
import TaskModalWindow from "./common/TaskModalWindow.js";


class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      rowindextoupdate: null,
      f1: "",
      f2: ""
    };
    this.ModalClose = this.ModalClose.bind(this);
    this.renderTask = this.renderTask.bind(this);
  }

  ModalClose() {
    this.setState({
      showModal: false,
      rowindextoupdate: null
    });
  }

  renderTask(task, index) {
    return (
      <tr key={index}>
        <td></td>
        <td>{task.field1}</td>
        <td>{task.field2}</td>
        <td>
          
        {" "}
           <button
              onClick={() => {
                  console.log("entered delete");
                   this.props.deleteTask(task.key);
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
                  rowindextoupdate: task.key
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
    var f1 = "";
    var f2 = "";

    if (this.state.rowindextoupdate !== null) {
      this.props.tasks.tasks.map((t) => {
      if (t.key === this.state.rowindextoupdate) {
         console.log("entered inside");
         f1 = t.field1;
         f2 = t.field2;
      }

      })
  }

    return (
      <div>
        <TaskModalWindow
          show={this.state.showModal}
          onHide={this.ModalClose}
          user="true"
          update="true"
          rowindextoupdate={this.state.rowindextoupdate}
          f1prop={f1}
          f2prop={f2}
        />
       
       <Table striped condensed hover>
        <thead>
          <tr>
           <th></th>
           <th>Task</th>
           <th>Date</th>
         </tr>
        </thead>
        <tbody>
          {this.props.tasks.tasks.map(this.renderTask)}
        </tbody>
       </Table>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTask, updateTask }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
