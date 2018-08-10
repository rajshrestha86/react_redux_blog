import types from '../constants';


export default function(state=[], action)
{
    switch(action.type){
        case types.FETCH_BLOGS:{
            console.log(action.payload.status)
            return (action.payload.data)
        }
            
    }

    return state;
}