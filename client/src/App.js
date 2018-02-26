import React, { Component } from 'react';
import API from './utils/API';
import axios from 'axios';
import { Router, Route, Redirect } from 'react-router-dom';
//import './App.css';
import Nav from './components/NavBar/NavBar';
import Header from './components/Header1/Header';
import Foot from './components/Footer1/Footer';
import LogIntoAccount from "./components/LogIntoAccount";
import PostPet from "./components/PostPet";
import CreateAccount from "./components/CreateAccount";
import About from "./components/About";
//import PetCard from './components/Card/Card';
import './components/NavBar/NavBar.css';
import './components/Header1/Header.css';
//history dependency
import history from './history.js';


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
    <div>
      <Router history={history}>

      <div>

        <Nav  handleLogout={this.handleLogout}
          isAuthenticated={this.state.isAuthenticated}
          // need to update to take in user name...
          name={this.state.name}
        />

      <Route exact path="/" render = {() => {
        if(this.state.isAuthenticated) {
          return <Redirect to="/Home" />;
        }
          return <Redirect to="/LogIntoAccount" />;
      }}/>

      <Route exact path="/Home" component={Nav} />

      <Route exact path="/LogIntoAccount" render={() => {
        const isLoggedIn = this.state.isAuthenticated;
          if (isLoggedIn) {
             return <Redirect to="/Home" />;
            }
            return (<LogIntoAccount
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                handleFormSubmitExistingUser={this.handleFormSubmitExistingUser}
            />)
      }}/>

      <Route exact path="/Home" component={Nav} />

      <Route exact path="/LogIntoAccount" render={() => {
        const isLoggedIn = this.state.isAuthenticated;
           if (isLoggedIn) {
            return <Redirect to="/Home" />;
          }
            return (<LogIntoAccount
              handleEmailChange={this.handleEmailChange}
              handlePasswordChange={this.handlePasswordChange}
              handleFormSubmitExistingUser={this.handleFormSubmitExistingUser}
            />)
        }}
      />

      <Route exact path="/PostPet" render={() => {
         const isLoggedIn = this.state.isAuthenticated;
            if (!isLoggedIn) {
              return <Redirect to="/LogIntoAccount" />;
            }
              return (<PostPet
                handlePetNameChange={this.handlePetNameChange}
                handleAgeChange={this.handleAgeChange}
                handleBreedChange={this.handleBreedChange}
                handleBioChange={this.handleBioChange}
                handleImageChange={this.handleImageChange}
                handleContactInfoChange={this.handleContactInfoChange}
                handleFormSubmitNewPet={this.handleFormSubmitNewPet}
              />)
        }}
      />
      <Route exact path="/About" component={About} />
      <Route exact path="/CreateAccount" render={() => {
              const isLoggedIn = this.state.isAuthenticated;
              // const newUser=this.state.newUser;
              if (isLoggedIn) {
                return <Redirect to="/Home" />;
              }
              // if (newUser) {
              //   return <Redirect to="/Home"/>;
              // }
              return (<CreateAccount
                handleNameChange={this.handleNameChange}
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                handleFormSubmit={this.handleFormSubmit}
              />)
        }}
      />
      <Route exact path="/FindPet" render={() => this.state.pets.map(pet => (
              <FindPet
                id={pet.id}
                key={pet.id}
                name={pet.name}
                breed={pet.breed}
                age={pet.age}
                image={pet.image}
                contactInfo={pet.contactInfo}
                description={pet.description}
              />
        ))} 
      />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/SuccessStories" component={SuccessStories} />
      <Header />
     

    </div>
  </Router> 
  <Foot/>
</div>
{/* <Nav/>
<Header />
<Foot/> */}

      </div>
    );
  }
}

export default App;
