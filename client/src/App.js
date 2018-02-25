import React, { Component } from 'react';
//import './App.css';
import Nav from './components/NavBar/NavBar';
import Header from './components/Header1/Header';
import Foot from './components/Footer1/Footer';
//import PetCard from './components/Card/Card';
import './components/NavBar/NavBar.css';
import './components/Header1/Header.css';



class App extends Component {
  render() {

    return (
      <div className="App">

<Nav/>
<Header />
<Foot/>

      </div>
    );
  }
}

export default App;
