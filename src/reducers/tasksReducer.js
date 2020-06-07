const tasksReducer = (state={
    tasks:[]
} , action) =>{

    switch(action.type){

         case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
              };
         case 'DELETE_TASK':
            const removeTask = state.tasks.filter(
                (task) => action.payload !== task.key
              );
              return {
                ...state,
                tasks: removeTask,
              };
         case 'UPDATE_TASK':
            const editTasks = state.tasks.map((u) => {
                if (u.key === action.payload.key) {
               return Object.assign({}, u, {
               ...action.payload,
              });
            }
            return u;
            });
           return {
              ...state,
              tasks: editTasks,
           };  
        default :
           return state;  
    }

}

export default tasksReducer;