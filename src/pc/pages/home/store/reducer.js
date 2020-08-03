import { fromJS } from "immutable"
import * as actionTypes from "./constants"

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  writerPage: 1,
  writerTotalPage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: action.data.get("topicList"),
    articleList: action.data.get("articleList"),
    recommendList: action.data.get("recommendList"),
    writerList: action.data.get("writerList"),
    writerTotalPage: Math.ceil(action.data.get("writerList").size / 5)
  })
}

const addArticleList = (state, action) => {
  return state.merge({
    articleList: [...state.get("articleList"), ...action.data],
    articlePage: action.nextPage
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case actionTypes.ADD_ARTICLE_LIST:
      return addArticleList(state, action)
    case actionTypes.TOGGLE_SCROLL_TOP_SHOW:
      return state.set("showScroll", action.show)
    case actionTypes.CHANGE_WRITER_LIST:
      return state.set("writerPage", action.page)
    default:
      return state
  } 
}
