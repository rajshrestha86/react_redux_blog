import {CREATE_BLOG} from '../actions/create_new_blog';


export default function(state={status:false, code:0}, action)
{
    switch(action.type){
        case CREATE_BLOG:{
            console.log(action.payload.status);
            if(action.payload.status==201)
                return ({...state, status:true, code:201 });
            else
                return({...state, status:false, code:0 })
        }
       
    }

    return state;
}