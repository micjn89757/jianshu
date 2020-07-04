import React, { PureComponent } from 'react';
import "./style.css"
import { connect } from "react-redux"
import { actionCreators } from "./store"
import List from "./components/List"
import Recommend from "./components/Recommend"
import Topic from "./components/Topic"
import Writer from "./components/Writer"
import Download from "./components/Download"

class Home extends PureComponent {
  render() { 
    const { showScroll } = this.props
    return (
      <div className="homeContainer clearfix">
        <div className="homeLeft">
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4986/33b9e72aff1e083dfb5aa7a1c8a427e53fdc1e9e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
          <Topic />
          <List />
        </div>
        <aside className="homeRight">
          <Recommend />
          <Download />
          <Writer />
        </aside>
        {
          showScroll ? (
            <div className="backTop" onClick={this.handleScrollTop}>
              <svg t="1593849593197" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2046" width="20" height="20">
                <path d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z" p-id="2047" fill="#8a8a8a">
                </path>
              </svg>
            </div>
          ) : null
        }
      </div>
    );
  }

  componentDidMount() {
    this.props.hanleChangeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(["home", "showScroll"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hanleChangeHomeData() {
      dispatch(actionCreators.getHomeData())
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 710) {
        dispatch(actionCreators.toggleScrollTopShow(true))
      } else {
        dispatch(actionCreators.toggleScrollTopShow(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);