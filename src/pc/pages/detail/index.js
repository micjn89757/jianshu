import React from 'react';
import "./style.css"
import { connect } from "react-redux"
import { actionCreators } from "./store"
import { withRouter } from "react-router-dom"

class Detail extends React.PureComponent {
  render() { 
    const { title, content } = this.props
    return (
      <div className="detailContainer">
        <div className="detailWrapper clearfix">
          <section className="detailLeft">
            <div className="dl">
              <h2 className="title"> {title} </h2>
              <div dangerouslySetInnerHTML={{__html: content}}></div>              
            </div>
          </section>
          <section className="detailRight">detailright</section>
          <div className="backTop">
            <svg t="1593849593197" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2046" width="20" height="20">
              <path d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z" p-id="2047" fill="#8a8a8a">
              </path>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));