import React ,{ Component } from 'react';
import Comments from './Comments';


class BlogDetail extends Component{

    constructor(props)
    {
    super(props);
    this.state={
        comments: []
    };
    this.get_comments();
    }

    get_comments(){
        fetch("http://localhost:3010/comments?post_id="+this.props.id).then(response=> {return response.json()}).then(comments=> {
        this.setState({comments});
    }).catch(function(ex){console.log('parsing failed', ex) });
    }

    submit(event)
    {
        console.log("Submit button clicked");
        event.preventDefault();
        fetch('http://localhost:3010/comments', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({  'post_id' : this.props.id, 
                    'name':this.refs.Name.value, 
                    'email': this.refs.Email.value,
                    'comment': this.refs.Comment.value})
        }).then(res => {return res.json()}).then(data=> {
                                                        this.setState({comments: [...this.state.comments, data]});
                                                        console.log(JSON.stringify(data));
                                                                                            }).catch(function(ex){console.log('parsing failed', ex) });
        this.refs.Name.value='';
        this.refs.Email.value='';
        this.refs.Comment.value='';

    }

    render(){
    return(
        <div>
            <div className='row' >
                <div className='col' >
                <div className='list-group'>
            
        
                   <div className='list-group-item'> <h4>Title: {this.props.blogItem.title}</h4> </div>
                   <br/>
                   <div className='list-group-item'> 
                            <b>Author: </b> {this.props.blogItem.author_name}, {this.props.blogItem.time} <br/> <hr/>
                            <p> {this.props.blogItem.post}  </p>

                   
                   
                   </div>
                   <br />
                   <div className='list-group-item' > 
                    <h5> Comments: </h5>
                    
                        <Comments comments={this.state.comments} />
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


    );}
}


export default BlogDetail;