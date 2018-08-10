import axios from 'axios';
import types from '../constants';

const BLOG_URL="http://localhost:3010/posts";

export const CREATE_BLOG='CREATE_BLOG';


export function createBlog(blog){
    const request=axios.post(types.BLOG_URL,blog, {headers: {'Content-Type':'application/json'}})
    console.log('CREATE_BLOG ACTION');

    return {
        type: types.CREATE_BLOG,
        payload: request
    }
}