import { combineReducers } from 'redux'
import headerReducer from './header/headerReducer'


const rootReducer = combineReducers({
  header: headerReducer,
  //user: userReducer
})

export default rootReducer
