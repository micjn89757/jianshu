import React from 'react';
import styles from "./style.module.css"
import logoPic from "../../../assets/logo.png"
import { connect } from "react-redux"
import { actionCreators } from "./store"
import { actionCreators as loginActionCreators } from "../../pages/login/store"
import { Link } from "react-router-dom"

class Header extends React.Component{
  constructor(props) {
    super(props)
    this.iref = React.createRef()
  }

  render() {
    const { handleInputFocus, handleInputBlur, focused, list, login, logout } = this.props
    return (
      <nav className={styles.container}>
        <header className={`${styles.header} ${styles.clearfix}`}>
          <Link className={styles.logo} to="/">
            <img src={logoPic} alt='' />
          </Link>
          <Link to="/write" className={`${styles.writting} ${styles.btn}`}>
              <span className="iconfont">&#xe708;</span>
              写文章
          </Link>
          <Link to="/reg" className={`${styles.reg} ${styles.btn}`}>注册</Link>
          <nav>
            <section className={styles.left+' '+ styles.active}>首页</section>
            <section className={styles.left}>下载App</section>
            <div className={styles.search}>
              <input onFocus={() => {handleInputFocus(list)}} onBlur={handleInputBlur} className={this.props.focused ? styles.focus : '' } placeholder="搜索"/>
              <span className={focused ? `${styles.focus} ${styles.searchIcon} iconfont` : `${styles.searchIcon} iconfont` }>&#xe617;</span>
              { this.getListArea() }
            </div>

            {
              login ? <Link onClick={logout} to='/' className={styles.right + ' '+ styles.logout}>退出</Link> : <Link to='/login' className={styles.right + ' '+ styles.login}>登录</Link>
            }

            <section className={`${styles.right} ${styles.aa}`}>
              <span className="iconfont">&#xe636;</span>
            </section>
          </nav>
        </header>
      </nav>
    )
  }

  getListArea = () => {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []

    if (newList.length) {
      for (let index = (page-1) * 10; index < page * 10; index++) {
        pageList.push(
          <li key={newList[index]} className={styles.searchInfoItem}>
              <a href="/">{newList[index]}</a>
          </li>
        )     
      }
    }
    

    if (focused || mouseIn) {
      return (
        <section className={styles.searchInfo} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <section className={styles.searchInfoTitle}>
            热门搜索
            <span className={styles.searchInfoSwitch} onClick={() => {handleChangePage(page,totalPage,this.iref.current)}}>
              <i ref={this.iref} className={`iconfont ${styles.spin}`}>&#xe851;</i>
              换一批
            </span>
          </section>
          <ul className={styles.searchInfoList}>
            {
              pageList
            }  
          </ul>
        </section>
      )
    } else {
      return null
    }
  }
}



const mapStateToProps = (state) => {
  return {
    // 下面两种写法是相同的
    // focused: state.get("header").get("focused")
    focused: state.getIn(["header","focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header","page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },  
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
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
    logout() {
      dispatch(loginActionCreators.changelogin(false))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);