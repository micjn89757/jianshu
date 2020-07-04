import { fromJS } from "immutable"
import * as actionTypes from "./constants"

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: action.data.get("topicList"),
    articleList: action.data.get("articleList"),
    recommendList: action.data.get("recommendList"),
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
    default:
      return state
  } 
}
