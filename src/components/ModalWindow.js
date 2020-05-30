import React from 'react';
import {Modal,Form} from  'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser,updateUser} from '../actions/action.js';
import {Button} from 'antd';
import DatePicker from "react-datepicker";

class ModalWindow extends React.Component{

       constructor(props){
         
           console.log('in constructor');
           console.log(props)
            super(props);

            this.state={
                loading : false ,
                update : this.props.update,
                rowindex : this.props.rowindextoupdate
            }
         
       }
       
       static getDerivedStateFromProps(props,state){
        console.log('in derived');
        console.log(props);
        return { rowindex : props.rowindextoupdate};
      }
       
     
       render(){
   
       
        console.log(this.state)

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
                             />
                      </Form.Group>


                      <Form.Group controlId="UMail">
                             <Form.Label>User Mail</Form.Label>
                             <Form.Control
                               ref="usermailref"
                               type="text"
                               name="userfield2"
                             />
                      </Form.Group>
                    
                      <Button   onClick = {async()=>
                        {
                           

                            var obj = {}
                        
                            obj.field1 = this.refs.usernameref.value ;
                            obj.field2 = this.refs.usermailref.value;
                            if(null === obj.field1 || '' === obj.field1 || null === obj.field2 || '' === obj.field2)
                            {
                                alert('Both are madatory to be filled');
                                
                            }
                            else{
                                 
                               
                                if(this.state.update === 'true')
                                   {
                                       obj.index = this.state.rowindex.index ;
                                       this.props.updateUser(obj);
                                    }
                                else
                                this.props.addUser(obj);
                        
                                this.props.onHide();
                            }
                        }}
                        > Save</Button>
                      
                 </div>
             </Modal.Body>    
              </Modal>
                
               )

          
          

       }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addUser,updateUser} , dispatch);
}

export default connect(()=>{},mapDispatchToProps)(ModalWindow) ;