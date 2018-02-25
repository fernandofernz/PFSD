import React, { Component } from 'react';
import API from './utils/API';
import axios from 'axios';
import { Router, Route, Redirect } from "react-router-dom";
//import './App.css';
import Nav from './components/NavBar/NavBar';
import Header from './components/Header1/Header';
import Foot from './components/Footer1/Footer';
//import PetCard from './components/Card/Card';
import './components/NavBar/NavBar.css';
import './components/Header1/Header.css';



class App extends Component {

  state = {
    currentPage: "Home",
    name: "",
    email: "",
    password: "",
    pets: [],
    isAuthenticated: false,
    userId: "",
    image: "",
    contactInfo: ""

  };

  findPet = id => {
    // Filter this.state.pets for pets with an id not equal to the id being removed
    const pets = this.state.pets.filter(pet => pet.id !== id);
    // Set this.state.pets equal to the new pets array
    this.setState({ pets });
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.getPets();
  }

  // Loads all books  and sets them to this.state.books
  getPets = () => {
    API.getPets()
      .then(res =>
        this.setState({ pets: res.data, name: "", breed: "", age: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  };

  handleImageChange = e => {
    this.setState({ image: e.target.value });
    console.log(this.state.image);
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
    console.log(this.state.password);
  };

  handlePetNameChange = e => {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  };

  handleContactInfoChange = e => {
    this.setState({ contactInfo: e.target.value });
    console.log(this.state.contactInfo);
  };

  handleBreedChange = e => {
    this.setState({ breed: e.target.value });
    console.log(this.state.breed);
  };

  handleAgeChange = e => {
    this.setState({ age: e.target.value });
    console.log(this.state.age);
  };

  handleBioChange = e => {
    this.setState({ description: e.target.value });
    console.log(this.state.description);
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  //new user
  handleFormSubmit = param => e => {
    e.preventDefault();


    axios.post("/api/users", this.state).then(res => {

      this.setState({ isAuthenticated: true, userId: res.data._id });
    });

  };

  handleFormSubmitExistingUser = param => e => {
    e.preventDefault();
    axios.post("/api/users/login", this.state).then(res => {
      this.setState({ isAuthenticated: true, userId: res.data._id });
    }).catch(err => alert(err));
  };


  handleFormSubmitNewPet = param => e => {
    e.preventDefault();
    axios.post("/api/pets", this.state).then(res => {
      // go to the homepage
      // this.props.history.push("Home");
      //history.push('/Home');
    }).catch(err => alert(err));

  };

  handleLogout = () => {
    this.setState({ isAuthenticated: false })
  }
  render() {
    console.log(this.state.pets);
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
