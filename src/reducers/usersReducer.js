const usersReducer = (state={
    users:[]
} , action) =>{

    switch(action.type){

         case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
              };
         case 'DELETE_USER':
            const removeUser = state.users.filter(
                (user) => action.payload !== user.key
              );
              return {
                ...state,
                users: removeUser,
              };
        case 'UPDATE_USER':
              const editUsers = state.users.map((u) => {
              if (u.key === action.payload.key) {
             return Object.assign({}, u, {
             ...action.payload,
            });
          }
          return u;
          });
         return {
            ...state,
            users: editUsers,
         };  
           default :
              return state;  
    }

    //return state;

}

export default usersReducer;