import React ,{ Component } from 'react';
import { Link } from 'react-router-dom';

const BlogItem=(props)=>{
    
        console.log(props);
        return(
            <div>
            <li className='list-group-item' >
                <div className='media-body'>
                    <Link to={'/id/'+props.post.id} ><h4 className='list-group-item-heading'> {props.post.title} </h4> </Link>
                    <p className='list-group-item-text'> {props.post.description} </p><hr/> <small> {props.post.author_name}, {props.post.time} </small> 
                    
                </div>

            </li>
            <br/>
            </div>
        );
}

export default BlogItem;