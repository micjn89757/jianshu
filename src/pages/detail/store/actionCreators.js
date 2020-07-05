import axios from "axios"
import { fromJS } from "immutable"
import * as actionType from "./constants"

const changeDetail = (data) => {
  return {
    type: actionType.CHANGE_DETAIL,
    data
  }
}

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json", {
      params: {
        id
      }
    })
    .then(res => {
      const data = fromJS(res.data.data)
      dispatch(changeDetail(data))
    })
    .catch(err => {
      console.error(err); 
    })
  }
}