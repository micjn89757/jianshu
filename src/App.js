import React, { Component } from 'react';
import Header from "./common/header"
import { Provider } from "react-redux"
import store from "./store"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail/loadable"
import Login from "./pages/login"
import Writer from "./pages/writer"

class App extends Component {
  render() { 
    return (
        <Provider store={store}>         
          <BrowserRouter>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Writer}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;