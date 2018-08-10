import types from '../constants';


export default function(state={status:false, code:0}, action)
{
    switch(action.type){
        case types.CREATE_BLOG:{
            console.log(action.payload.status);
            if(action.payload.status==201)
                return ({...state, status:true, code:201 });
            else
                return({...state, status:false, code:0 })
        }
       
    }

    return state;
}