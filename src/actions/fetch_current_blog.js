import axios from 'axios';

const BLOG_URL="http://localhost:3010/posts/";

export const FETCH_BLOG_ITEM='FETCH_BLOG_ITEM';


export function fetchBlogItem(id){
    const request=axios.get(BLOG_URL+id); 
    console.log('FETCH_BLOG ACTION');

    return {
        type: FETCH_BLOG_ITEM,
        payload: request
    }
}