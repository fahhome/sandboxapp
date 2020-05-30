import React from 'react';
import {Modal,Form} from  'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask,updateTask} from '../actions/action.js';
import {Button} from 'antd';
import DatePicker from "react-datepicker";

class AddTaskModal extends React.Component{

       constructor(props){
         
            super(props);

            this.state={
                loading : false ,
                editfield1 : this.props.editfield1,
                editfield2 : this.props.editfield2,  //if coming from Add New Button then it will be 
                index : this.props.index ,           //null
                editrow : this.props.editrow,
                pef1 : this.props.editfield1,
                pef2 : this.props.editfield2,
                user : this.props.user

            }
            
            this.toggleup = this.toggleup.bind(this);
            this.toggledown = this.toggledown.bind(this);
            this.handleChange = this.handleChange.bind(this);
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
   
        console.log('in render');
        console.log(this.state)

        async function wait(duration = 2000) {
            await new Promise(resolve => setTimeout(resolve, duration));
          }

          
          if(this.state.user === true){

               return(
                    
              <Modal
               {...this.props}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
              >

            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter2">
                Add New User
              </Modal.Title>
            </Modal.Header>
              

             <Modal.Body>
                 
                 <div className="container">
                      
                      <Form.Group controlId="UName">
                             <Form.Label>User name</Form.Label>
                             <Form.Control
                               ref="usernameref"
                               type="text"
                               name="userfield1"
                               value={this.state.userfield1}
                               onChange={this.handleChange}
                             />
                      </Form.Group>


                      <Form.Group controlId="UMail">
                             <Form.Label>User Mail</Form.Label>
                             <Form.Control
                               ref="usermailref"
                               type="text"
                               name="userfield2"
                               value={this.state.userfield2}
                               onChange={this.handleChange}
                             />
                      </Form.Group>
                    
                       <button>Save/Update</button>
                      
                 </div>
             </Modal.Body>    
              </Modal>
                
               )

          }
          
          else{

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
                               name="editfield1"
                               value={this.state.editfield1}
                               onChange={this.handleChange}
                             />
                       </Form.Group>


                       <Form.Group controlId="DA">
                            <Form.Label>Date Added</Form.Label>
                             <Form.Control
                               ref="dateref"
                               type="date"
                               name="editfield2"
                               value={this.state.editfield2}
                               onChange={this.handleChange}
                               required
                               placeholder="Date Added"
                             />
                       </Form.Group>

                       <Button  loading={this.state.loading}  onClick = {async()=>
                        {
                           

                            var obj = {}
                        
                            obj.field1 = this.refs.taskref.value ;
                            obj.field2 = this.refs.dateref.value;
                            if(null === obj.field1 || '' === obj.field1 || null === obj.field2 || '' === obj.field2)
                            {
                                alert('Both are madatory to be filled');
                                
                            }
                            else{
                                 
                                this.toggleup();
                                await wait();
                                this.toggledown();
                                 if(this.state.pef1 === undefined || this.state.pef2 === undefined)
                                  {
                                    this.props.addTask(obj);
                                  }
                                  else{
                                    obj.index = this.state.index ;
                                    this.props.updateTask(obj);
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

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask,updateTask} , dispatch);
}

export default connect(()=>{},mapDispatchToProps)(AddTaskModal) ;