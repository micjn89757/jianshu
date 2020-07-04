import React, { memo } from 'react';
import "./css/Topic.css"
import { connect } from "react-redux"

function Topic(props) {
  const { list } = props
  return (
    <div className="topicWrapper">
      {
        list.map((item) => {
          return (
            <section key = {item.get("id")} className="topicItem">
              {item.get("title")}
            </section>
          )
        })
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "topicList"])
  }
}

export default connect(mapStateToProps, null)(memo(Topic));