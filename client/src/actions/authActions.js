import  axios from 'axios';
import {returnErrors} from './errorActions';
//import PropTypes from 'prop-types';

import{
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
   LOGIN_FAIL,
    LOGIN_SUCCESS
    //LOGOUT_SUCCESS
    }from "./types";

    //check token &load user
    export const loadUser =()=> (dispatch,getState) => {
        //User loading
        dispatch({type: USER_LOADING});
      
        axios.get('/api/auth/user', tokenConfig(getState))
        .then(res=> dispatch({
            type:USER_LOADED,
            payload:res.data
        }))
        .catch(err=> {
           if (err.response && err.response.data) {
            dispatch(returnErrors(err.response.data,err.response.status));}
            dispatch({
                type:AUTH_ERROR
            });
        });
    };
//register user
export const register=({name,email,password})=>(
    dispatch: Function) => {
    
    //headers
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    //request body
    const body=JSON.stringify({name,email,password});
    
    axios.post('/api/users',body, config)
    .then(res =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        })
      )
    .catch(err =>{
        if (err.response && err.response.data) {
        dispatch(
            
            returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
          );}
          dispatch({
            type: REGISTER_FAIL
          });
    });

};
//Login User

export const login=({email,password})=>(
    dispatch: Function) => {
    
    //headers
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    //request body
    const body=JSON.stringify({email,password});
    
    axios.post('/api/auth',body, config)
    .then(res =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
      )
    .catch(err =>{
        if (err.response && err.response.data) {
        dispatch(
            
            returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
          );}
          dispatch({
            type: LOGIN_FAIL
          });
    });

};






//logout user
export const logout =()=>{
    return{
        type:LOGOUT_SUCCESS
    };
}


    //setup config/headers and token
    export const tokenConfig =(getState:Function) =>{
          
        //Get token from local storage
        const token=getState().auth.token;

        //headers
        const config={
            headers:{
                "Content-type ":"application/json"
            }
        };
        //if tokrn ,add to headers
        if(token){
            config.headers['x-auth-token']=token;
        }
        return config;

    };