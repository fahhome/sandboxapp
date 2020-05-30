import React from 'react';
import {Modal,Form} from  'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask,updateTask,loadoff,loadon} from '../actions/action.js';
import {Button} from 'antd';
import DatePicker from "react-datepicker";

class AddTaskModal extends React.Component{

       constructor(props){
         
            super(props);

            this.state={
                loading : false ,
                editfield1 : '',
                editfield2 : '',  //if coming from Add New Button then it will be 
                index : this.props.index ,           //null
                editrow : this.props.editrow,
                pef1 : '',
                pef2 : '',
                user : this.props.user ,
                update : this.props.update,
                rowindex : this.props.rowindextoupdate

            }
            
            this.toggleup = this.toggleup.bind(this);
            this.toggledown = this.toggledown.bind(this);
            this.handleChange = this.handleChange.bind(this);
       }


       static getDerivedStateFromProps(props,state){
        console.log('AddTaskModal derived state') ;
        console.log(props);
        return { rowindex : props.rowindextoupdate , editfield1 : props.f1prop};
      }


   
       handleChange(event){
         event.preventDefault();
         this.setState({
           [event.target.name] : event.target.value
         })
       }

       toggleup(){
           this.setState({
               loading:true
           })
       }

       toggledown(){
        this.setState({
            loading:false
        })
    }
       render(){


        async function wait(duration = 2000) {
            await new Promise(resolve => setTimeout(resolve, duration));
          }

           return(

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
                              // value={this.state.editfield1}
                               onChange={this.handleChange}
                             />
                       </Form.Group>


                       <Form.Group controlId="DA">
                            <Form.Label>Date Added</Form.Label>
                             <Form.Control
                               ref="dateref"
                               type="date"
                               name="pef2"
                              // value={this.state.editfield2}
                               onChange={this.handleChange}
                               required
                               placeholder="Date Added"
                             />
                       </Form.Group>

                       <Button  loading={this.props.loader.loading}  onClick = {async()=>
                        {
                           

                            var obj = {}
                        
                            obj.field1 = this.refs.taskref.value ;
                            obj.field2 = this.refs.dateref.value;
                            if(null === obj.field1 || '' === obj.field1 || null === obj.field2 || '' === obj.field2)
                            {
                                alert('Both are madatory to be filled');
                                
                            }
                            else{
                                 
                                //this.toggleup();
                                this.props.loadon();
                                await wait();
                                this.props.loadoff();
                                //this.toggledown();
                                 if(this.state.update === "true")
                                  {

                                    obj.index = this.state.rowindex.index ;   //change
                                    this.props.updateTask(obj);
                                   
                                  }
                                  else{
                                    this.props.addTask(obj);
                                  }
                        
                                this.props.onHide();
                            }
                        }}
                        > Save</Button>
                    
                 </div>
                    
            </Modal.Body>
            <Modal.Footer>
        
            </Modal.Footer>
          </Modal>
        
           )
                      

       }

}

function mapStateToProps(state){
  
  return {
      loader :  state.loader
  }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask,updateTask , loadoff , loadon} , dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTaskModal) ;