import React, { Component } from 'react';
import { Provider } from "react-redux"
import store from "./store"
import { BrowserRouter, Route } from "react-router-dom"

// pc页面
import Header from "./pc/common/header"
import Home from "./pc/pages/home"
import Detail from "./pc/pages/detail/loadable"
import Login from "./pc/pages/login"
import Writer from "./pc/pages/writer"

// 移动端页面
import PHeader from "./phone/common/header"
import PHome from "./phone/pages/home"

class App extends Component {
  render() { 
    const {isPhone} = this.props
    return (
      <Provider store={store}>         
        <BrowserRouter>
          {
            isPhone? (
              <>
                <PHeader />
                <Route path="/" exact component={PHome}></Route> 
              </>
            ) : (
              <>
                <Header />
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/write" exact component={Writer}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
              </>             
            )
          }
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;