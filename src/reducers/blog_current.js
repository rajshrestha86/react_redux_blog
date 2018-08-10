import types from '../constants';


export default function(state={blogItem:[], comments:[]}, action)
{
    switch(action.type){
        case types.FETCH_BLOG_ITEM:{
            console.log(action.payload.data);
            return ({...state, blogItem:action.payload.data });
        }
        case types.FETCH_BLOG_ITEM_COMMENTS:{
            console.log(action.payload.data);
            return ({blogItem:state.blogItem, comments:action.payload.data});
        }
        case types.CREATE_COMMENT:{
            return ({...state, comments:[...state.comments, action.payload.data] })
        }
            
    }

    return state;
}