import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import { Editor } from 'slate-react';
import RichText from '../components/RichText';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createBlog} from '../actions/create_new_blog';

class Create extends Component {
  
  constructor(props)
  {
    super(props);
   

    
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      var newdate = year + "/" + month + "/" + day;
      console.log(newdate);
      
      this.props.createBlogReducer.status=false
      this.props.createBlogReducer.code=0

      this.state={
        redirect: false,
        date: newdate,
        success: this.props.createBlogReducer.status,
        value: 'text',
        requested: false

      }

    

      
  }



 


  onChange=({value})=>{
      this.setState({ value});
  }

 

  submit(event){

    event.preventDefault();
    this.props.createBlog(JSON.stringify({  
        'author_name':this.refs.Author.value, 
        'title': this.refs.Title.value,
        'description': this.refs.Description.value,
        'post': this.refs.Blog.value,
        'time': this.state.date }));
    this.setState({requested: true})
    // fetch('http://localhost:3010/posts', {
    //     method: 'post',
    //     headers: {'Content-Type':'application/json'},
    //     body: JSON.stringify({  
    //             'author_name':this.refs.Author.value, 
    //             'title': this.refs.Title.value,
    //             'description': this.refs.Description.value,
    //             'post': this.state.blog_value,
    //             'time': this.state.date })
    // }).then(res => {return res.json()}).then(data=> {this.setState({success: true});}).catch(function(ex){console.log('parsing failed', ex) });

    
    
    

  }
  
  
  render() {
    if(this.props.createBlogReducer.code==201){
        this.refs.Author.value='';
        this.refs.Title.value='';
        this.refs.Description.value='';
        this.refs.Blog.value='';
        // return <Redirect to='/'/>;

    }
       
    return (
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
              <div className='list-group-item'>
              <a href='#message'>Test</a>
                  <form  method="POST" onSubmit={this.submit.bind(this)}>
                    <input ref="Author" type="text" className="form-control" required placeholder="Author" id="Author"/> <br/>
                    <input ref="Title" type="text" className="form-control" required placeholder="Title" id="Title"/>  <br />
                    <textarea ref="Description" type="text" className="form-control" required placeholder="Give a short description about your blog." id="Description"/> <br/>
                    {/* <Editor placeholder="Contents of your blog." value={this.state.value} onChange={this.onChange} /> */}
                    <textarea ref="Blog" type="text" className="form-control" required placeholder="Contents of your Blog." id="Blog" rows='10'/> <br/>
                    <RichText placeholder="Enter your contents."/>
  
                    <input ref="Time" type="hidden"  />
                    <button type="Submit"  className="btn btn-success" >Post</button> 
                    
                  </form>
               </div>   

               { this.props.createBlogReducer.status && this.props.createBlogReducer.code==201 ?
               <div className="alert alert-success" ref='message'>
                  <strong>Success!</strong> You can find your blog on our Homepage.
                </div>:null } 

                {this.props.createBlogReducer.code!=201 &&  this.state.requested?
               <div className="alert alert-danger" ref='message'>
                  <strong>Error!</strong> Please try again.
                </div>:null } 


          <br/> 
          
        </div>
        <div className='col-md-3' >

        </div>
      </div>
    
      </div>

      
    );
  }
}

function mapStateToProps(createBlogReducer){
    return createBlogReducer;
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({createBlog}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Create);

