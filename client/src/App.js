import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components';
import HomePage from './components/home/HomePage';
import IdeaPage from './components/idea/IdeaPage';
import LogInPage from './components/login/LogInPage';

const Body = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  width: 100vw;

  text-align: center;
`

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: lightGray;
  height: 100px;

  a{
    font-size: 20px;
    text-decoration: none;
    font-family: Sans-serif;
    color: black;
  }
  a:hover{
    color: blue;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <Body>
          <Navbar>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/user/:userId'>Idea</Link>
          </Navbar>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/login' component={LogInPage}/>
            <Route path='/user/:userId' component={IdeaPage}/>
          </Switch>
        </Body>
      </Router>
    );
  }
}

export default App;
