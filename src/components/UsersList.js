import React from 'react' ; 
import TaskList from './TaskList.js'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask,deleteUser,updateUser} from '../actions/action.js';
import {Button,ButtonToolbar} from 'react-bootstrap';
import AddTaskModal from './AddTaskModal.js';
import User from './User.js';

class UsersList extends React.Component{

     constructor(props){
         super(props);
     }

     render(){
       
        return(
            <table>

                 <thead>
                       <tr>
                           <th>User</th>
                           <th>Email</th>
                    
                       </tr>
                 </thead>

                 <tbody>
                 {this.props.users.map((user, index) => {
                  return [
                  <tr >
                  <td >
                 {user.field1}
                 </td>
                <td>{user.field2}</td>
                <td>  <button  onClick={()=>{this.props.deleteUser(index)}}  >Delete</button>   </td>
                </tr>
               
                  ];
                  })}
                 </tbody>

            </table>
        )

     }

}

function mapStateToProps(state){
  
    return {
        users :  state.users
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteUser,updateUser} , dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersList)