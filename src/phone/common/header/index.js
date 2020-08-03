import React from 'react';
import "./style.css"
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logoWrap">
          <Link to="/">
            <img className="logo" src="https://cdn2.jianshu.io/asimov/src/assets/image/nav-logo.faf216af.png" alt="logo" />
          </Link>
          <span className="slogan">精彩文章免费看</span>
        </div>
        <div className="download">
          <button>立即下载</button>
        </div>
      </header>
    )
  }
}

export default Header