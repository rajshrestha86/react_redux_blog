import React, {Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBlogs} from '../actions/fetch_blogs'
import BlogItem from '../components/BlogItem'

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
        <ul className='list-group'>
            {this.props.blogs.map(this.renderBlogList)}

        </ul>
    )}
}
function mapStateToProps(blogs){
    return(blogs);

}

function mapDispathToProps(dispatch){
    return bindActionCreators({fetchBlogs}, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(BlogList);