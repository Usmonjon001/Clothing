import './App.css';
import Homepage from './page/homepage/homepage.component';
import { Route, Routes } from "react-router";
import Shop from './page/shop/shop.components'
import Header from './components/header/header.component'
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up'
import React, { Component } from 'react'
import {auth} from './firebase/firebase.utils';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
            <Header currentUser={this.state.currentUser}/>
            <Routes>
              <Route index path="/" element={<Homepage/>}/>
              <Route path="shop" element={<Shop/>}/>
              <Route path="signIn" element={<SignInAndSignUp/>}/>
            </Routes>
      </div>
    )
  }
}



