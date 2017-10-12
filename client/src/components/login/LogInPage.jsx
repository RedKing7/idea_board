import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import SignUpForm from './SignUpForm'

class LogInPage extends Component {
   state = {
      users: []
   }

   getAllUsers = async () =>{
      let response = await axios.get('/api/users');
      try{
         this.setState({users: response.data})
      }catch(err){console.log(err)}
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
                  return (
                     <div key={user._id}>
                        <Link key={user._id} to={`/user/${user._id}/`}>{user.username}</Link>
                     </div>
                  )
               })
            }
            <SignUpForm/>
         </div>
      );
   }
}

export default LogInPage;