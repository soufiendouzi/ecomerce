import {combinedReducer}  from 'redux'
import {userReducer} from "./user"

const rootReducer = combinedReducer ({userReducer})

export default rootReducer ; 