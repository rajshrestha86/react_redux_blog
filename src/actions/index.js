import add_blog_comment from './add_blog_comment';
import types from '../constants';
import axios from 'axios';
import types from '../constants';


const actions={
    addComment(comment){
        const request=axios.post(types.BLOG_COMMENT_URL,comment, {headers: {'Content-Type':'application/json'}})
        console.log('CREATE_COMMENT ACTION');
    
        return {
            type: types.CREATE_COMMENT,
            payload: request
        }
    },

    createBlog(blog){
        const request=axios.post(types.BLOG_URL,blog, {headers: {'Content-Type':'application/json'}})
        console.log('CREATE_BLOG ACTION');
    
        return {
            type: types.CREATE_BLOG,
            payload: request
        }
    },

    fetchBlogs(){
        const request=axios.get(types.BLOG_URL); 
        console.log('FETCH_BLOG ACTION');
    
        return {
            type: types.FETCH_BLOGS,
            payload: request
        }
    },

    fetchBlogItemComment(id){
        const request=axios.get(types.BLOG_URL+id); 
        console.log('FETCH_BLOG ACTION');
    
        return {
            type: types.FETCH_BLOG_ITEM_COMMENTS,
            payload: request
        }
    },

    fetchBlogItem(id){
        const request=axios.get(types.BLOG_URL+id); 
        console.log('FETCH_BLOG ACTION');
    
        return {
            type: types.FETCH_BLOG_ITEM,
            payload: request
        }
    }






};


export default actions;