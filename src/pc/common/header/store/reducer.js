import * as actionTypes from "./constants"
import { fromJS } from "immutable"

// immutable库
// immutable对象是为了保证store的state是不可变的，不可修改

// 使得state成为immutable对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前immutable对象的值
      // 和设置的值，返回一个全新的对象
      return state.set("focused", true)
    case actionTypes.SEARCH_BLUR:
      return state.set("focused", false)
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return state.set("mouseIn", true)
    case actionTypes.MOUSE_LEAVE:
      return state.set("mouseIn", false)
    case actionTypes.CHANGE_PAGE:
      return state.set("page", action.page)
    default:
      return state
  }
}