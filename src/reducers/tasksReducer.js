
const tasksReducer = (state=[] , action) =>{

    switch(action.type){

         case 'ADD_TASK':
             console.log('Inside ADD');
             state = state.concat(action.payload);
             console.log(state)
             break;
         case 'DELETE_TASK':
            console.log('INSIDE DELETE');
          
           // state = [
            //    ...state.slice(0, action.payload),
             //   ...state.slice(action.payload + 1)
            //]
            //state = state.slice();
            //state = state.filter ((item, index) => index !== 1)
            //state = state.slice();
            //state.splice(action.payload,1)
           // return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
            
            
           break;

          
         case 'UPDATE_TASK':
             console.log('Update task received in reducer');
             
             const i = action.payload.index ;
             console.log(i);
             console.log(state[i])
             state=state.slice();
             state[i].field1 = action.payload.field1 ;
             state[i].field2 = action.payload.field2 ; 
             console.log(state[i]);
             break;    
    }

    return state;

}

export default tasksReducer;