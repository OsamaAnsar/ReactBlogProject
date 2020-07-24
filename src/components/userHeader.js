import React from 'react';
import {connect } from 'react-redux'
import {fetchPostsandUser } from '../actions/'

class UserHeader extends React.Component {
  
    render() { 
//console.log(this.props.users);
    
        //console.log(user);
        const {user}=this.props;
   if(!user)
    {return (<div>Loading...</div>);}
  

    return ( <div className='header'>{user.name}</div> );
    }
  
};
const mapStateToProps=(state,ownProps)=>{
    let user=state.users.find((user)=>user.id=== ownProps.userId);
    return {user:user};

};
 
//export default UserHeader;
export default connect(mapStateToProps,{fetchPostsandUser})(UserHeader);