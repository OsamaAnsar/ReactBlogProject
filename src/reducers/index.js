import {combineReducers} from 'redux'
import postsReducers from './postsReducer'
import userReducer from './userReducer';



export default combineReducers({
posts:postsReducers,
users:userReducer
});