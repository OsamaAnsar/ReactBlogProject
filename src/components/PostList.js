import React from 'react';
import { connect } from 'react-redux'
import { fetchPostsandUser } from '../actions'
import UserHeader from './userHeader'

class PostList extends React.Component {
    constructor(props) {
        super(props);
     
    }
    componentDidMount(){
this.props.fetchPostsandUser();
    }
    render() {
         
    return ( <div className='ui container relaxed divided list'>{this.renderList()}</div> );
    }
    renderList(){
        
        return(
           
            this.props.posts.map(post=>{
return(

<div className='item' key={post.id}>
<i className='large middle aligned icon user'></i>
<div className='content'>
    <div className='description'>
<h2>{post.title}</h2>
<p>{post.body}</p>

    </div>
    <UserHeader userId={post.userId}/>
</div>


</div>


)

            })
        )
    }
};
const mapStateTOProps=(state)=>{
    
    return {posts:state.posts}

}
 
export default connect(mapStateTOProps,{fetchPostsandUser})(PostList);