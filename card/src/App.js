import React from 'react'
import axios from 'axios'
import './App.css';
import Card from './Components/Card'

class App extends React.Component{
  state = {
    userData: {},
    followers: []
  }
  componentDidMount() {
    axios.get("https://api.github.com/users/Majortom917")
      .then(response => {
        this.setState({ userData: response.data });
        console.log(this.state.userData);
      })
      .catch(error => {
        console.log('error', error)

      })

    axios
      .get("https://api.github.com/users/Majortom917/followers")
      .then(response => {
        console.log('followers', response);
        this.setState({ followers: response.data })
      })
      .catch(error => {
        console.log('error', error)

      })
  }
  render() {
    return(
      <div className = 'App'>
        <Card data ={this.state.userData} followers = {this.state.followers}/>
      </div>
    )
  }
}

export default App;
