const loadingReducer = (state={loading:false} , action) =>{

   switch(action.type){

      case 'LOAD_OFF' :
         return {loading : false}
      case 'LOAD_ON' : 
          return {loading : true}  
       default:
           return state;
   }


}


export default loadingReducer;