import axios from "axios"
import { fromJS } from "immutable"
import * as actionTypes from "./constants"

// 初始化文章列表
const initList = (dispatch) => {
  axios.get("/api/home.json")
  .then(res => {
    const data = fromJS(res.data.data)
    const action = {
      type: actionTypes.get_home_list,
      data
    }
    dispatch(action)
  })
  .catch(err => {
    console.error(err); 
  })
}

const getMoreList = (dispatch) => {
  axios.get("/api/homeMoreList.json")
  .then(res => {
    console.log(res)
    const data = fromJS(res.data.data)
    const action = {
      type: actionTypes.get_more_list,
      data
    }
    dispatch(action)
  })
  .catch(err => {
    console.error(err); 
  })
}

const initRecommendList = (dispatch) => {
  axios.get("/api/headerList.json")
  .then(res => {
    const data = fromJS(res.data.data)
    const action = {
      type: actionTypes.get_recommend_list,
      data,
      totalPage: Math.ceil(data.size / 7)
    }
    dispatch(action)
  })
  .catch(err => {
    console.error(err); 
  })
}

export const changePage = (page) => {
  return {
    type: actionTypes.change_pagelist,
    page
  }  
}

export const getRecommendList = () => {
  return initRecommendList
}

export const getArticleList = () => {
  return initList
}

export const moreList = () => {
  return getMoreList
}