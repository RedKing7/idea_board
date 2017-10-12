import React, { Component } from 'react';
import axios from 'axios';

class SignUpForm extends Component {
   state = {
      newUser: {
         username: '',
         password: ''
      }
   }

   handleChange = (e) =>{
      let field = e.target.name;
      let value = e.target.value;
      let updateUser = {...this.state.newUser};
      updateUser[field] = value;
      this.setState({newUser: updateUser});
   }

   handleSubmit = async (e) =>{
      e.preventDefault();
      try{
         const res = await axios.post('/api/users', {"user":this.state.newUser})
         console.log(res.data);
      }catch(err){console.log(err)}
   }

   render(){
      return (
         <div>
            <h1>Sign-Up</h1>
            <form onSubmit={this.handleSubmit}>
               <div>
                  <label htmlFor="username">Username: </label>
                  <input
                     type="text"
                     name="username"
                     onChange={this.handleChange}
                     value={this.state.newUser.username}
                  />
               </div>
               <div>
                  <label htmlFor="password">Password: </label>
                  <input
                     type="password"
                     name="password"
                     onChange={this.handleChange}
                     value={this.state.newUser.password}
                  />
               </div>
               <input type="submit" value="Sign Up"/>
            </form>
         </div>
      );
   }
}

export default SignUpForm;