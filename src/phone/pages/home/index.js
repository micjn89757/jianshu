import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import ArticleList from "./components/articleList"
import Footer from "../../common/footer"

class Home extends React.PureComponent {
  constructor (props) {
    super(props)
    this.iref = React.createRef()
  }

  render() {
    const { handleChangePage, page, totalPage } = this.props

    return (
      <div className={styles.homePage}>
        <section className={styles.recommend}>
          <section className={styles.title}>
            <span>热门专题</span>
            <span onClick={() => { handleChangePage(page, totalPage, this.iref.current) }} className={styles.spin}>
              <i ref={this.iref} className="iconfont">&#xe851;</i>
              换一批
            </span>
          </section>
          <section className={styles.recommedItems}>
            { this.getListArea() }
          </section>
        </section>
        <hr />
        <ArticleList />
        <Footer />
      </div>
    )
  }

  componentDidMount() {
    this.props.getRecommendList()
    this.props.getArticleList()
  }

  getListArea = () => {
    const { recommendList, page } = this.props
    const newList = recommendList.toJS()
    const pageList = []

    if (newList.length) {
      for (let index = (page-1) * 6; index < page * 6; index++) {
        pageList.push(
          <Link to="/" className={styles.tag} key={newList[index]}>{newList[index]}</Link>
        )     
      }
    }
    
    return pageList
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(["home", "recommendList"]),
    page: state.getIn(["home", "page"]),
    totalPage: state.getIn(["home", "totalPage"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else {
        originAngle = 0
      }     
      spin.style.transform = `rotate(${originAngle+360}deg)`

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      }else {
        dispatch(actionCreators.changePage(1))
      }
    },
    getRecommendList() {
      dispatch(actionCreators.getRecommendList())
    },
    getArticleList() {
      dispatch(actionCreators.getArticleList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)