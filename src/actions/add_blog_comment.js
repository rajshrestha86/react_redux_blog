import axios from 'axios';

const BLOG_COMMENT_URL="http://localhost:3010/comments";

export const CREATE_COMMENT='CREATE_COMMENT';


export function addComment(comment){
    const request=axios.post(BLOG_COMMENT_URL,comment, {headers: {'Content-Type':'application/json'}})
    console.log('CREATE_COMMENT ACTION');

    return {
        type: CREATE_COMMENT,
        payload: request
    }
}