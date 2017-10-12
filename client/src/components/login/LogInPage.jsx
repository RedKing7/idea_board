import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class LogInPage extends Component {
   state = {
      users: []
   }

   getAllUsers = async () =>{
      console.log('Hello!')
      let response = await axios.get('/api/users');
      try{
         this.setState({users: response.data})
      }catch(err){console.log(err)}
      console.log(response.data);
   }

   componentWillMount(){
      this.getAllUsers();
   }

   render() {
      return (
         <div>
            <h1>Login Page</h1>
            <h3>Select an Existing User</h3>
            {
               this.state.users.map(user=>{
                  return (<Link key={user._id} to={`/user/${user._id}/`}>{user.username}</Link>)
               })
            }
         </div>
      );
   }
}

export default LogInPage;