import React, { memo } from 'react';
import styles from "./css/Topic.module.css"
import { connect } from "react-redux"

function Topic(props) {
  const { list } = props
  return (
    <div className={styles.topicWrapper}>
      {
        list.map((item) => {
          return (
            <section key = {item.get("id")} className={styles.topicItem}>
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