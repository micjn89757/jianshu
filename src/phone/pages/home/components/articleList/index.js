import React from "react"
import styles from "../css/articleList.module.css"
import { actionCreators } from "../../store"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class ArticleList extends React.PureComponent {
  render() {
    const { articleList, moreList } = this.props
    return (
      <section className={styles.container}>
        <ul className={styles.listUi}>
          { 
            articleList.map((item)=> {
              return (
                <li className={styles.listItem} key={item.get("id")}>
                  <Link to="/" style={{display: "block"}}>
                    <h6 className={styles.title}>{item.get("title")}</h6>
                    <p className={styles.abstract}>​​ {item.get("desc")} </p>
                  </Link>
                </li>
                )}
            )
          }
        </ul>
        <section onClick={moreList} className={styles.moreList}>
          点击查看更多文章
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(["home", "articleList"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moreList() {
      console.log("object");
      dispatch(actionCreators.moreList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)