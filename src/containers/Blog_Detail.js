import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBlogItem} from '../actions/fetch_current_blog';
import {fetchBlogItemComment} from '../actions/fetch_current_blog_comments';
import {addComment} from '../actions/add_blog_comment';
import Comments from '../components/Comments'
import { Link } from 'react-router-dom';

const CurrentBlogDetail=class BlogDetail extends Component{

    constructor(props, context){
        super(props, context);

    }


    componentDidMount(){
        this.props.fetchBlogItem(this.props.match.params.id);
        this.props.fetchBlogItemComment(this.props.match.params.id);
    }

    submit(event)
    {
        console.log("Submit button clicked");
        event.preventDefault();

        this.props.addComment(
            JSON.stringify({  'post_id' : this.props.id, 
                    'name':this.refs.Name.value, 
                    'email': this.refs.Email.value,
                    'comment': this.refs.Comment.value})
        )
        this.refs.Name.value='';
        this.refs.Email.value='';
        this.refs.Comment.value='';

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



            <div>
            <div className='row' >
                <div className='col' >
                <div className='list-group'>
            
        
                   <div className='list-group-item'> <h4>Title: {this.props.currentBlog.blogItem.title}</h4> </div>
                   <br/>
                   <div className='list-group-item'> 
                            <b>Author: </b> {this.props.currentBlog.blogItem.author_name}, {this.props.currentBlog.blogItem.time} <br/> <hr/>
                            <p> {this.props.currentBlog.blogItem.post}  </p>

                   
                   
                   </div>
                   <br />
                   <div className='list-group-item' > 
                    <h5> Comments: </h5>
                    
                        <Comments comments={this.props.currentBlog.comments} />
                        <br/>
                        <div className='list-group'>
                            <form method="POST" onSubmit={this.submit.bind(this)} >
                            <div className='list-group-item'> <input ref="Name" type="text" className="form-control" placeholder="Name" id="Name"/>  </div>
                            <div className='list-group-item'>  <input ref="Email" type="email" className="form-control" id="email" placeholder="Email"/> </div>
                            <div className='list-group-item'>   <textarea ref="Comment" className="form-control"placeholder="Your Comment." id="comment" rows="5"></textarea> <br />
                                                                <button type="Submit" className="btn btn-success">Comment</button>  </div>

                            </form>
                            
                        </div>


                   
                    
                   </div>

                </div>
                </div>

            </div>

        </div>




            
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