import React from 'react';
import BlogItem from './BlogItem';


const BlogList=(props)=>{
    const blogPosts=props.blogPosts;
    const blogItems=blogPosts.map(blogItem=>{
        return(
           <BlogItem post={blogItem} key={blogItem.id} history={props.history} /> 
        );
    });

    return(
    
        <ul className='list-group'>
            {blogItems}
        </ul>

    );
}


export default BlogList ;