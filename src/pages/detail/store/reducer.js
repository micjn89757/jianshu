import { fromJS } from "immutable"
import * as actionType  from "./constants"

const defaultState = fromJS({
  title: "",
  content: ""
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_DETAIL:
      return state.merge({
        title: action.data.get("title"),
        content: action.data.get("content")
      })
    default:
      return state
  }
}