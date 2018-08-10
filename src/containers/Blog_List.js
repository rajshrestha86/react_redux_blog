import React, {Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBlogs} from '../actions/fetch_blogs'
import BlogItem from '../components/BlogItem'
import { Link } from 'react-router-dom';

const BlogList= class BlogList extends Component{
    
    
    componentDidMount(){
            this.props.fetchBlogs();
        };


    renderBlogList(blogItem)
    {
        // console.log('Rendering the Blog List',this.props.blogs)
        return(
            <BlogItem post={blogItem} key={blogItem.id}  /> 
            );
    }

    render(){
    return(
        <div>
      

        
        
        <nav className='navbar navbar-expand-sm bg-light justify-content-center' >
          <ul className='navbar-nav'>
          <li className='nav-item'>  <Link className='nav-link' to="/" >Home</Link>{' '} </li>
          <li className='nav-item'> <Link className='nav-link' to="/create">Create</Link> </li>
          </ul>
        </nav>
        
      <div className='row'>
        <div className='col-md-3' >
    
        </div>
        <div className='col-md-6' >
          <br/> 
          {this.props.blogs.map(this.renderBlogList)}
        </div>
        <div className='col-md-3' >

        </div>
      </div>
      </div>
 
    )}
}
function mapStateToProps(blogs){
    return(blogs);

}

function mapDispathToProps(dispatch){
    return bindActionCreators({fetchBlogs}, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(BlogList);