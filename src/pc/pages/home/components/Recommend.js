import React, { memo } from 'react';
import styles from "./css/Recommend.module.css"
import { connect } from "react-redux"


function Recommend(props) {
  const { list } = props
  return (
    <div className={styles.recommendWrapper}>       
      {
        list.map((item) => {
          return <img className={styles.recommendItem} src={item.get("imgUrl")} key={item.get("id")} alt={item.get("id")} />
        })
      }    
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "recommendList"])
  }
}

export default connect(mapStateToProps, null)(memo(Recommend));