
import axios from "axios" 
import {SUCC_USER , FAIL_USER, LOAD_USER, LOGOUT_USER } from "../ActionTypes/user"

export const register = (newUser) => async (dispatch) => {
    try {
        let result = await axios.post("api/user/register" , newUser )
            dispatch ({type : SUCC_USER , payload : result.data })
        
    } catch (error) {
        dispatch({ type : FAIL_USER , payload : error.response.data.errors })
        
    }
}
export const login =(user) => async (dispatch) => {
    try {
        let result = await axios.post("api/user/login" , user )

        dispatch({type : LOAD_USER  , payload : result.data  })
    } catch (error) {

     dispatch({ type : FAIL_USER , payload : error.response.data.errors })

    }
}
export const current = async (dispatch) => {
    try {
        const config = { 
            headers : { authorization : localStorage.getItem ("token ") ,},
        }
        let result = await axios.post("api/user/current" , config )
        dispatch({type : LOAD_USER , payload : result.data })

    } catch (error) {
        dispatch({ type : FAIL_USER , payload : error.response.data.errors })

    }
}
export const logout = async (dispatch) => {
    dispatch({type : LOGOUT_USER })
}