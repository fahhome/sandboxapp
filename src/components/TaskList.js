import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask,updateTask} from '../actions/action.js';
import AddTaskModal from './AddTaskModal.js';

class TaskList extends React.Component{
 
    constructor(props){
        super(props)
        this.state={
            showModal : false ,
            rowindextoupdate : null,
            f1 : '',
            f2 : ''
        }
        this.ModalClose = this.ModalClose.bind(this);
        
    }


    ModalClose(){
        this.setState({
            showModal:false,
            rowindextoupdate : null
        })
    }
   
    render(){
    
        console.log(this.state) ;
        
        var f1 = '' ; 
        var f2 = '' ;

        if(this.state.rowindextoupdate !== null){
           console.log(this.state.rowindextoupdate);
           f1 =  this.props.tasks[this.state.rowindextoupdate.index].field1;
           f2 =  this.props.tasks[this.state.rowindextoupdate.index].field2;
        }

        return(

            <div>

            <AddTaskModal  show={this.state.showModal}  onHide = {this.ModalClose}  user='true'  update = 'true'  rowindextoupdate = {this.state.rowindextoupdate}  f1prop = {f1}  f2prop={f2}   />

            <table>

                 <thead>
                       <tr>
                           <th>Task Description</th>
                           <th>Date Added</th>
                    
                       </tr>
                 </thead>

                 <tbody>
                 {this.props.tasks.map((task, index) => {
                  return [
                  <tr >
                  <td >
                 {task.field1}
                 </td>
                <td>{task.field2}</td>
                <td>  <button  onClick={()=>{this.props.deleteTask(index)}}  >Delete</button>   </td>
                <td>  <button  onClick={()=>{this.setState({showModal:true , rowindextoupdate : {index}})}}> Update</button>  </td>
                </tr>
               
                  ];
                  })}
                 </tbody>

            </table>

            </div>
        )
    }


}

function mapStateToProps(state){
  
     return {
         tasks :  state.tasks
     }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask,updateTask} , dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);