import axios from 'axios';

const BLOG_URL="http://localhost:3010/comments?post_id=";

export const FETCH_BLOG_ITEM_COMMENTS='FETCH_BLOG_ITEM_COMMENT';

export function fetchBlogItemComment(id){
    const request=axios.get(BLOG_URL+id); 
    console.log('FETCH_BLOG ACTION');

    return {
        type: FETCH_BLOG_ITEM_COMMENTS,
        payload: request
    }
}