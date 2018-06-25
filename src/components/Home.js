import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogList from  './BlogList';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      blogPosts: []
    };
    this.fetchBlogs();  
  }

  


  fetchBlogs(){
    fetch("http://localhost:3010/posts").then(response=> {return response.json()}).then(blogPosts=> {
      this.setState({blogPosts});
      console.log(blogPosts[0].title);
  }).catch(function(ex){console.log('parsing failed', ex) })
  }



  
  render() 
  {
    
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
          <BlogList blogPosts={this.state.blogPosts} />
        </div>
        <div className='col-md-3' >

        </div>
      </div>
      </div>
      
    );
  }
}

export default Home;
