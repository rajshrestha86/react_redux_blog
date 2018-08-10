import axios from 'axios';
import types from '../constants';

const BLOG_COMMENT_URL="http://localhost:3010/comments";

export const CREATE_COMMENT='CREATE_COMMENT';


export function addComment(comment){
    const request=axios.post(types.BLOG_COMMENT_URL,comment, {headers: {'Content-Type':'application/json'}})
    console.log('CREATE_COMMENT ACTION');

    return {
        type: types.CREATE_COMMENT,
        payload: request
    }
}