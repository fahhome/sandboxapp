/*export const addTask = task => {

     return{
         type : 'ADD_TASK',
         payload : task
     };

};
export const deleteTask = (taskId) => {

    return{
        type : 'DELETE_TASK' , 
        payload : taskId
    };

}*/

export const addTask = task => ({
    type: 'ADD_TASK',
    payload: task
  })
  
  export const deleteTask = taskId => ({
    type: 'DELETE_TASK',
    payload: taskId
  })

export const updateTask = task => ({
    type:'UPDATE_TASK',
    payload:task
})

export const addUser = task => ({
    type: 'ADD_USER',
    payload: task
})

export const deleteUser = userId => (
    {
        type: 'DELETE_USER',
        payload: userId
    }
)

export const updateUser = task => ({
    type:'UPDATE_USER',
    payload:task
})