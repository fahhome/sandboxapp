import React from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask,updateTask} from '../actions/action.js';
import AddTaskModal from './AddTaskModal.js';

class Task extends React.Component{




       constructor(props){
           super(props);
           this.state={
               desc : this.props.desc,
               id : this.props.id,
               key: this.props.key,
               showModalForUpdate : false,
               editrow : false
           }
       }

      
      
       render(){

        console.log('inside render of Task.js');
        console.log(this.state);
        let ModalClose = () => this.setState({showModalForUpdate:false});

           return(
               
               
               <tr>
                   <td>{this.state.desc.field1}</td>
                   <td>{this.state.desc.field2}</td>
                   <td>
                       <button 
                              onClick={()=>
                              {
                                  this.setState(
                                      {
                                          showModalForUpdate:true,
                                          editrow:true
                                      }
                                 )
                                
                              }
                                
                              }>Update
                       </button>
                    </td>
                   <td><button onClick={()=>{this.props.deleteTask(this.state.id)}}>Delete</button></td>
                   <td><AddTaskModal  show={this.state.showModalForUpdate} onHide={ModalClose} editfield1 = {this.state.desc.field1} editfield2 = {this.state.desc.field2} index={this.state.id}  editrow={this.state.editrow}/> </td>
               </tr>
            
           )
       }
 
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask,updateTask} , dispatch)
}

export default connect(()=>{},mapDispatchToProps)(Task);