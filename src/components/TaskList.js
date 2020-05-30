import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../actions/action.js';
import Task from './Task.js';

class TaskList extends React.Component{
 
    constructor(props){
        super(props)
    }
   
    render(){
        return(
            <table>

                 <thead>
                       <tr>
                           <th>TaskDescription</th>
                           <th>DateAdded</th>
                    
                       </tr>
                 </thead>

                 <tbody>
                        {this.props.tasks.map( (task,index) => <Task key={index}  desc = {task}  id={index}  />  )}
                 </tbody>

            </table>
        )
    }


}

function mapStateToProps(state){
  
     return {
         tasks :  state.tasks
     }

}

export default connect(mapStateToProps)(TaskList);