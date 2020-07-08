import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard'
import axios from 'axios'


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
        <UserCard userInfo={this.state.user} />
      </div>
    );
  }
}

export default App;
