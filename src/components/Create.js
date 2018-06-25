import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

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
      
      this.state={
        redirect: false,
        date: newdate,
        success: false
      }
  }


 

  submit(event){

    event.preventDefault();
    
    fetch('http://localhost:3010/posts', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({  
                'author_name':this.refs.Author.value, 
                'title': this.refs.Title.value,
                'description': this.refs.Description.value,
                'post': this.refs.Blog.value.replace(/\n/g, '\n'),
                'time': this.state.date })
    }).then(res => {return res.json()}).then(data=> {this.setState({success: true});}).catch(function(ex){console.log('parsing failed', ex) });

    this.refs.Author.value='';
    this.refs.Title.value='';
    this.refs.Description.value='';
    this.refs.Blog.value='';
    
    

  }
  
  
  render() {
    if(this.state.redirect)
        return <Redirect to='/'/>;
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
                  
                  <form  method="POST" onSubmit={this.submit.bind(this)}>
                   <input ref="Author" type="text" className="form-control" placeholder="Author" id="Author"/> <br/>
                   <input ref="Title" type="text" className="form-control" placeholder="Title" id="Title"/>  <br />
                   <textarea ref="Description" type="text" className="form-control" placeholder="Give a short description about your blog." id="Description"/> <br/>
                   <textarea ref="Blog" type="text" className="form-control" placeholder="Contents of your Blog." id="Blog" rows='10'/> <br/>
                   <input ref="Time" type="hidden"  />
                   <button type="Submit" className="btn btn-success">Post</button>  

                  </form>
               </div>   

               { this.state.success ?
               <div className="alert alert-success">
                  <strong>Success!</strong> You can find your blog on our Homepage.
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

export default Create;

