import {FETCH_BLOG_ITEM} from '../actions/fetch_current_blog';
import {FETCH_BLOG_ITEM_COMMENTS} from '../actions/fetch_current_blog_comments';
import {CREATE_COMMENT} from '../actions/add_blog_comment';

export default function(state={blogItem:[], comments:[]}, action)
{
    switch(action.type){
        case FETCH_BLOG_ITEM:{
            console.log(action.payload.data);
            return ({...state, blogItem:action.payload.data });
        }
        case FETCH_BLOG_ITEM_COMMENTS:{
            console.log(action.payload.data);
            return ({blogItem:state.blogItem, comments:action.payload.data});
        }
        case CREATE_COMMENT:{
            return ({...state, comments:[...state.comments, action.payload.data] })
        }
            
    }

    return state;
}