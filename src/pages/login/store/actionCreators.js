import axios from "axios"
import * as actionType from "./constants"

export const changelogin = (data) => ({
  type: actionType.CHANGE_LOGIN,
  data
})


export const login = (username, password) => {
  return (dispatch) => {
    axios.get("/api/login.json", {
      params: {
        username: username,
        password: password
      }
    })
    .then(res => {
      const data = res.data.data
      dispatch(changelogin(data))
    })
    .catch(err => {
      console.error(err); 
    })
  }
}

