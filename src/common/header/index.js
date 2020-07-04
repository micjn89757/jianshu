import React from 'react';
import "./style.css"
import logoPic from "../../assets/logo.png"
import { connect } from "react-redux"
import { actionCreators } from "./store"
import { Link } from "react-router-dom"

class Header extends React.Component{
  constructor(props) {
    super(props)
    this.iref = React.createRef()
  }
  render() {
    const { handleInputFocus, handleInputBlur, focused, list} = this.props
    return (
      <header className="header">
        <Link className="logo" to="/" style={{
          background: `url(${logoPic})`,
          backgroundSize: "cover"
        }}> </Link>
        <nav className="clearfix">
          <section className="left active">首页</section>
          <section className="left">下载App</section>
          <div className="search">
            <input onFocus={() => {handleInputFocus(list)}} onBlur={handleInputBlur} className={this.props.focused ? 'focus' : '' } placeholder="搜索"/>
            <span className={focused ? 'focus iconfont' : 'iconfont' }>&#xe617;</span>
            { this.getListArea() }
          </div>
          <section className="right">登录</section>
          <section className="right">
            <span className="iconfont" style={{fontSize: "20px",fontWeight: "600"}}>&#xe636;</span>
          </section>
        </nav>
        <div className="addition">
          <button className="writting">
            <span className="iconfont">&#xe708;</span>
            写文章
          </button>
          <button className="reg">注册</button>
        </div>
      </header>
    )
  }

  getListArea = () => {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []

    if (newList.length) {
      for (let index = (page-1) * 10; index < page * 10; index++) {
        pageList.push(
          <li key={newList[index]} className="searchInfoItem">
              <a href="/">{newList[index]}</a>
          </li>
        )     
      }
    }
    

    if (focused || mouseIn) {
      return (
        <section className="searchInfo" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <section className="searchInfoTitle">
            热门搜索
            <span className="searchInfoSwitch" onClick={() => {handleChangePage(page,totalPage,this.iref.current)}}>
              <i ref={this.iref} className="iconfont spin">&#xe851;</i>
              换一批
            </span>
          </section>
          <ul className="searchInfoList">
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
    mouseIn: state.getIn(["header", "mouseIn"])
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

      console.log(originAngle);
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      }else {
        dispatch(actionCreators.changePage(1))
      }
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);