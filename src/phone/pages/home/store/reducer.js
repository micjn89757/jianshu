import { fromJS } from "immutable"
import * as actionTypes from "./constants"

const defaultState = fromJS({
  recommendList: [],
  page: 1,
  totalPage: 1,
  articleList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.get_recommend_list:
      return state.merge({
        recommendList: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.change_pagelist: 
      return state.set("page", action.page)
    case actionTypes.get_home_list:
      return state.merge({
        articleList: action.data.get("articleList")
      })
    case actionTypes.get_more_list:
      return state.set("articleList", state.get("articleList").concat(action.data))
    default:
      return state
  }
}