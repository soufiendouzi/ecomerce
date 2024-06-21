// import 

import { LOAD_USER , SUCC_USER , FAIL_USER , CUURENT_USER , LOGOUT_USER} from "../ActionTypes"
// initiale state 
 const initState = {
    user : null ,
    loadUser : false , 
    errors : [] , 
    isAuth : false 
 }
// function 
const userReducer = (state = initState , { type , payload  })  => {
   switch (type) {
      case LOAD_USER:
         return {...state , loadUser : true }
      case SUCC_USER :
         localStorage.setItem("token" , payload.token)
          return {...state , loadUser : false ,user : payload.dataa , isAuth : true}
      case CUURENT_USER :
         return {...state , user : payload , loadUser : false , isAuth : true}
      case FAIL_USER :
         return {...state , loadUser : false , errors : payload}
      case LOGOUT_USER : 
         localStorage.removeItem("token") 
       return { user : null ,
         loadUser : false , 
         errors : [] , 
         isAuth : false  } 
         
   
      default:
return state ;   }
}
export default userReducer ; 
