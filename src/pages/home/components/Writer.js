import React, { PureComponent } from 'react';
import styles from "./css/Writer.module.css"
import { connect } from 'react-redux'
import { actionCreators } from "../store"

class Writer extends PureComponent {
  constructor(props) {
    super(props)
    this.iref = React.createRef()
  }

  render() { 
    const { writerPage, writerTotalPage, handleChangePage } = this.props
    return (
      <div className={styles.writerWrapper}>
        <span>推荐作者</span>
        <a href='/' onClick={(e) => {handleChangePage(writerPage, writerTotalPage, this.iref.current, e)}} className={`${styles.pageChange} ${styles.clearfix}`} >
          <i ref={this.iref} className={`${styles.spin} iconfont`}>&#xe851;</i>
          换一批
        </a>
        <ul className={styles.writerList}>
          {
            this.getListArea()
          }
        </ul>
        <a href="/" className={styles.findMore}>查看全部</a>
      </div>
    );
  }

  getListArea() {
    const {list, writerPage} = this.props
    let pageList = []

    if (list.size) {
      for (let index = (writerPage - 1) * 5; index < writerPage * 5; index++) {
        pageList.push(        
            <li key={list.getIn([index, 'id'])}>
              <a href='/' className={styles.avatar} >
                <img src={list.getIn([index, 'img'])} alt="" />
              </a>
              <a href='/' className={styles.follow}>
                <i className={`${styles.icFollow} iconfont`}>&#xe620;</i>
                关注
              </a>
              <a href="/" className={styles.name}> {list.getIn([index, 'name'])} </a>
              <p>{`写了${list.getIn([index, 'words'])}k字 · ${list.getIn([index, 'like'])}k喜欢`}</p>
            </li>        
        )
      }
    }
    return pageList   
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "writerList"]),
    writerPage: state.getIn(["home", "writerPage"]),
    writerTotalPage: state.getIn(["home", "writerTotalPage"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangePage(page, totalPage, spin, e) {
      e.preventDefault()
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle+360}deg)`

      if (page < totalPage) {
        dispatch(actionCreators.changeWriterPage(page + 1))
      }else {
        dispatch(actionCreators.changeWriterPage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer);