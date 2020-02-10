import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login"

import NavBar from "./NavBar/navbar"
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';



import Home from "./pages/home"
import MyStory from "./pages/mystory";
import Contact from "./pages/contact";
import Blog from "../blog"
import Post from "../Post"
// import history from "../Utils/history";





class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userDetails: {},
      isUserLoggedIn: false
    }
  }
  responseGoogle = response => {
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
  };
  logout = () => {
    this.setState({ isUserLoggedIn: false })
  };


  render() {
    return (
      <div className="App">

        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mystory" component={MyStory} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" render={Post} />
        </Switch>

      </div>

    )
  }
}
export default App;
