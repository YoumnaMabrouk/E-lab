import { GET_VELOCITIES,ADD_VELOCITIES,DELETE_VELOCITIES,VELOCITIES_LOADING,VELOCITIES_FAIL} from '../actions/types';

const initialState={
    velocities:[],
    loading:false
};

export default function(state=initialState,action){
    switch(action.type){
 case GET_VELOCITIES:
     return{
         ...state,
         velocities:action.payload,
         loading:false

     };
     case ADD_VELOCITIES:
        return{
            ...state,
            velocities:[action.payload, ...state.velocities],
            loading:true
        };
     case DELETE_VELOCITIES:
         return{
           ...state,
           velocities:state.velocities.filter(velocity => velocity._id !== action.payload)
         };
        
    case VELOCITIES_LOADING:
        return{
         ...state,
         loading:true
        };
     case VELOCITIES_FAIL:
         return{
            ...state,
            loading:false
         };

     default:
         return state;

    }
}