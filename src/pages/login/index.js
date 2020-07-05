import React from 'react';
import { connect } from "react-redux"
import "./style.css"
import { actionCreators } from "./store"
import { Redirect } from "react-router-dom"

class Login extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    this.handleInputOnChange = this.handleInputOnChange.bind(this)
  }

  render() {
    const { login, loginStatus } = this.props
    const { username, password } = this.state
    if ( !loginStatus ) {
      return(
        <div className="loginWrapper">
          <div className="loginBox">
            <input data-name="username" onChange={this.handleInputOnChange} placeholder="用户名" type="text" value={this.state.username} />
            <input data-name="password" onChange={this.handleInputOnChange} placeholder="密码" type="password" value={this.state.password} />
            <button onClick={() => {login(username, password)}}>登录</button>
          </div>
        </div>
      )
    } else {
      return <Redirect to="/" />
    }
  }

  handleInputOnChange(e) {
    this.setState({
      [e.target.dataset.name]: [e.target.value]
    })
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(["login", "login"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login(username, password) {
      console.log(username, password);
      dispatch(actionCreators.login(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)