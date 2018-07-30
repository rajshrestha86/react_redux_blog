import axios from 'axios';

const BLOG_URL="http://localhost:3010/posts";

export const CREATE_BLOG='CREATE_BLOG';


export function createBlog(blog){
    const request=axios.post(BLOG_URL,blog, {headers: {'Content-Type':'application/json'}})
    console.log('CREATE_BLOG ACTION');

    return {
        type: CREATE_BLOG,
        payload: request
    }
}