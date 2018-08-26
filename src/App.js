import React, { Component } from 'react';
import './App.css';
import Header from 'pages/Header.jsx';
import Home from 'pages/Home.jsx';
import News from 'pages/News.jsx';
import Channel from 'pages/Channel.jsx';
import Artists from 'pages/Artists.jsx';
import Footer from 'pages/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <News />
        <Channel />
        <Artists />
        <Footer />
      </div>
    );
  }
}

export default App;
