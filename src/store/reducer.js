// 让最外层的state也变成immutable对象,保证其不可修改
import { combineReducers } from "redux-immutable"
import { reducer as headerReducer } from "../common/header/store"
import { reducer as homeReducer } from "../pages/home/store"

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
})

export default reducer 