// 让最外层的state也变成immutable对象,保证其不可修改
import { combineReducers } from "redux-immutable"
import { isPhone } from "../isPhone"

// pc
import { reducer as headerReducer } from "../pc/common/header/store"
import { reducer as homeReducer } from "../pc/pages/home/store"
import { reducer as detailReducer } from "../pc/pages/detail/store"
import { reducer as loginReducer } from "../pc/pages/login/store"

// phone
import { reducer as pHomeReducer } from "../phone/pages/home/store"

const bool = isPhone()

const reducer = combineReducers({
  header:  headerReducer,
  home: bool ? pHomeReducer : homeReducer,
  detail: detailReducer,
  login: loginReducer,
})

export default reducer 