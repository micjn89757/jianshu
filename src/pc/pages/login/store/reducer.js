import { fromJS } from "immutable"
import * as actionType from "./constants"

const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_LOGIN:
      return state.set("login", action.data)
    default:
      return state
  }
}