import axios from 'axios';

const BLOG_URL="http://localhost:3010/posts";

export const FETCH_BLOGS='FETCH_BLOGS';


export function fetchBlogs(){
    const request=axios.get(BLOG_URL); 
    console.log('FETCH_BLOG ACTION');

    return {
        type: FETCH_BLOGS,
        payload: request
    }
}