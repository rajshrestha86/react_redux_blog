import {FETCH_BLOGS} from '../actions/fetch_blogs';


export default function(state=[], action)
{
    switch(action.type){
        case FETCH_BLOGS:{
            console.log(action.payload.status)
            return (action.payload.data)
        }
            
    }

    return state;
}