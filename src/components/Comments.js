import React from 'react';


const Comments=(props)=>{
    const comments=props.comments;
    const _comments=comments.map(comment=>{
        return(
          
                 <div className='list-group-item' key={comment.id}> 
                       <b> Name: {comment.name} </b> ({comment.email})  <br/>
                       <div className='list-group-item'> <b> Comment: </b> <p> {comment.comment} </p> </div>
                       <button className='btn btn-danger' >Delete </button>
                 </div>
        );
    });

    return(
    
        <ul className='list-group'>
            {_comments}
        </ul>

    );
}


export default Comments;