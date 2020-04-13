import { GET_VELOCITIES,ADD_VELOCITIES,DELETE_VELOCITIES,VELOCITIES_LOADING, VELOCITIES_FAIL} from './types';
import  axios from 'axios';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

export const getVelocities=() => dispatch => {
 dispatch(setVelocitiesLoading());
 axios
 .get('/api/velocities') 
 .then(res => 
    dispatch({
        type:GET_VELOCITIES,
        payload :res.data
    })) 
    .catch(err=>{
        if (err.response && err.response.data) {
        dispatch(returnErrors (err.response.data,err.response.status));}
    });
};

export const addVelocities=velocity=> (dispatch) => {
   axios
   .post('/api/velocities',velocity) 
   .then(res => dispatch ({
    type:ADD_VELOCITIES,
    payload:res.data
   }))  .catch(err=>{
    if (err.response && err.response.data) {
    dispatch(returnErrors (err.response.data,err.response.status,'VELOCITIES_FAIL'));}
  
   dispatch({
    type: VELOCITIES_FAIL
  });
});
 };

export const deleteVelocities=id =>(dispatch)=> {
axios.delete(`/api/velocities/${id}`).then(res=>
    dispatch({
        type:DELETE_VELOCITIES,
        payload:id
    })
    ) .catch(err=>{
        if (err.response && err.response.data) {
        dispatch(returnErrors (err.response.data,err.response.status));}
        });
   };
 
   export const setVelocitiesLoading=() =>{
       return{
           type:VELOCITIES_LOADING
       };
   };
