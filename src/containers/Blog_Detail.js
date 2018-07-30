import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBlogItem} from '../actions/fetch_current_blog';
import {fetchBlogItemComment} from '../actions/fetch_current_blog_comments';
import {addComment} from '../actions/add_blog_comment';
import BlogDetailComponent from '../components/BlogDetail'
import { Link } from 'react-router-dom';

const CurrentBlogDetail=class BlogDetail extends Component{

    constructor(props, context){
        super(props, context);

    }


    componentDidMount(){
        this.props.fetchBlogItem(this.props.match.params.id);
        this.props.fetchBlogItemComment(this.props.match.params.id);
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

            <BlogDetailComponent blogItem={this.props.currentBlog.blogItem} id={this.props.match.params.id} comments={this.props.currentBlog.comments} addComment={this.props.addComment}/>
            </div>
            <div className='col-md-3' >

            </div>
        </div>
      </div>
        )};




}

function mapStateToProps(currentBlog){
    return currentBlog;
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchBlogItem, fetchBlogItemComment, addComment}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBlogDetail)