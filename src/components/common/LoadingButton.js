import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser, updateUser, loadoff, loadon ,addTask , updateTask } from '../../actions/action.js';
import { Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';


class LoadingButton extends React.Component{

    constructor(props){
        super(props);
        console.log('Inside Loading button');
        console.log(props);
    }

    render(){
     
        async function wait(duration = 2000) {
            await new Promise(resolve => setTimeout(resolve, duration));
        }

         return(
             <Button
                 loading={this.props.loader.loading}
                 onClick={async () => {
                     var obj = {};


                     if (null === this.props.taskerror) {
 
                         obj.field1 = this.props.taskrefvalue;
                         obj.field2 = this.props.daterefvalue;
                         obj.key = uuidv4();

                         this.props.loadon();
                         await wait();
                         this.props.loadoff();
                         if (this.props.update === "true") {
                             obj.key = this.props.rowindex; //change
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
         )

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
)(LoadingButton);