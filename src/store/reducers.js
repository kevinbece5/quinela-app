import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import quinelaReducer from '../reducer';

export default (history) => combineReducers({
    quinela: quinelaReducer,
    router: connectRouter(history)
})