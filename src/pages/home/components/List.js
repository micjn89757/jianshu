import React, { memo } from 'react';
import styles from "./css/List.module.css"
import { connect } from "react-redux"
import { actionCreators } from "../store"
import { Link } from "react-router-dom"

function List(props) {
  const { list, getMoreList, page } = props
  return (
    <div className={styles.listContainer}>       
      {
        list.map((item, index) => {
          return (
            <div key={ index } className={styles.listItem}>
              <img className={styles.pic} src={item.get("img")} alt="120" />
              <article className={styles.listInfo}>
                <h3>
                  <Link to={`/detail/${item.get("id")}`}>{item.get("title")}</Link>
                </h3>
                <p> {item.get("desc")} </p>
              </article>
            </div>
          )
        })
      }
      <a className={styles.loadMore} onClick={(e) => { getMoreList(page, e)}} href="/">阅读更多</a>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page,e) {
      e.preventDefault()
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(List));
