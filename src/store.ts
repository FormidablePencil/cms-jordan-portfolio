import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { portfolioContentT } from './reducers/reducerProps'
import cmsPortfolioContentReducer from './reducers/cmsPortfolioContentReducer'
import controlledAuthReducer, { controlledAuthT } from './reducers/controlledAuthReducer'
import readyToSaveToDbReducer from './reducers/readyToSaveToDbReducer'
import rawCrystalDataReducer from './reducers/rawCrystalDataReducer'
import { crystalParallaxT } from 'parallax-effect-crystals'

export interface rootT {
  cmsPortfolioContent: portfolioContentT
  controlledAuth: controlledAuthT
  readyToSaveToDb: boolean | 'err'
  rawCrystalData: crystalParallaxT,
}
const rootReducer = combineReducers<rootT>({
  cmsPortfolioContent: cmsPortfolioContentReducer,
  controlledAuth: controlledAuthReducer,
  readyToSaveToDb: readyToSaveToDbReducer,
  rawCrystalData: rawCrystalDataReducer,
})

const initialState = {}

const middleware = [thunk]

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
