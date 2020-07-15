import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://rabit-demo-api.herokuapp.com/`)
      .then((res) => {
        this.setState({ posts: res.data })
      }).catch((err) => console.error('Error occured during fetching artist details', err))
  }

  render() {
    console.log('posts', this.state.posts)
    return (
      <div className="container">
        <h1 class="main-title">Posts</h1>
        {
          this.state.posts.map(post => {
            return <div className="post-wrapper">
              <h4 className="post-title">{post.title}</h4>
              <p className="post-content">{post.content}</p>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
