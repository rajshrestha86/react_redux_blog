import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogDetail from './BlogDetail';


class Detail extends Component {
   
  constructor(props, context){
    super(props, context);
    this.state={
      blogItem:[]
    };
    this.fetchBlogItem();
  }
  


  fetchBlogItem(){
    fetch("http://localhost:3010/posts/"+this.props.match.params.id).then(response=> {
                                                                                          if (!response.ok) {
                                                                                            
                                                                                            
                                                                                            this.context.router.replace('/id/1');
                                                                                            throw Error(response.statusText); 
                                                                                          }
                                                                                          return response.json()}).then(blogItem=> {
                                                                                                                          this.setState({blogItem})}).catch(function(ex){console.log(ex) })
  }

  
  
  render() {
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
          
          <BlogDetail blogItem={this.state.blogItem} id={this.props.match.params.id}/>
        </div>
        <div className='col-md-3' >

        </div>
      </div>
      <h1>Detail ID: {this.props.match.params.id}</h1>
      </div>

      
    );
  }
}

export default Detail;

