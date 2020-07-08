import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard'
import axios from 'axios'

const testData =
  {
    login: 'Ehuntwork',
    avatar_url: logo,
    followers: 1,
    following: 1,
    public_repos: 34
  }


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      user: []
    };
    console.log("constructor is running");
  }

  componentDidMount(){
    console.log("cDM is running");
    
    axios.get('https://api.github.com/users/Ehuntwork')
    .then(res=>{
      this.setState({user: res.data})
    })
  }

  render() {
    console.log("rendering!");
    
    return (
      <div className="App">
        <UserCard userInfo={testData} />
      </div>
    );
  }
}

export default App;
