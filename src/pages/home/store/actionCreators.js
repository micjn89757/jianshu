import axios from "axios"
import * as actionTypes from "./constants"
import { fromJS } from "immutable"

const changeHomeData = (data) => {
  return {
    type: actionTypes.CHANGE_HOME_DATA,
    data
  }
}

const addHomeArticleList = (data, nextPage) => {
  return {
    type: actionTypes.ADD_ARTICLE_LIST,
    data,
    nextPage
  }
}

export const getHomeData = () => {
  return (dispatch) => {
    axios.get("/api/home.json")
    .then(res => {
      const data = fromJS(res.data.data)
      dispatch(changeHomeData(data))
    })
    .catch(err => {
      console.error(err); 
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homeMoreList.json", {
      params: {
        page
      }
    }).then(res => {
      const data = fromJS(res.data.data)
      dispatch(addHomeArticleList(data, page + 1))
    })
    .catch(err => {
      console.error(err); 
    })
  }
}

export const toggleScrollTopShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP_SHOW,
  show
})