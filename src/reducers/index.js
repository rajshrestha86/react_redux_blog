import {combineReducers} from 'redux';
import BlogListReducer from './blog_list';
import BlogCurrentItemReducer from './blog_current'
import CreateBlogReducer from './blog_create';

const rootReducer=combineReducers({
    blogs: BlogListReducer,
    currentBlog: BlogCurrentItemReducer,
    createBlogReducer: CreateBlogReducer

})


export default rootReducer;