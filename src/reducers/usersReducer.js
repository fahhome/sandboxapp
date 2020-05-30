const usersReducer = (state=[] , action) =>{

    switch(action.type){

         case 'ADD_USER':
             state = state.concat(action.payload);
             break;
         case 'DELETE_USER':
             state = state.slice();
             state.splice(action.payload,1);
             break;
         case 'UPDATE_USER':
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

export default usersReducer;