import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { portfolioContentT } from './reducers/reducerProps'
import cmsPortfolioContentReducer from './reducers/cmsPortfolioContentReducer'

export interface rootT {
  cmsPortfolioContent: portfolioContentT
}
const rootReducer = combineReducers<rootT>({
  cmsPortfolioContent: cmsPortfolioContentReducer
})

const initialState = {}

const middleware = [thunk]

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
