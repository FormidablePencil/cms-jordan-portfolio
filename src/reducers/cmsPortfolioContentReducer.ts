import { ON_CHANGE_VALUE, DELETE_CERTAIN_PORTFOLIO_ITEM, NEW_ADDITION_TO_CMS_CONTENT, FETCHED_CMS_PORTFOLIO_DATA } from "../actions/constants"
import { initialPortfolioContent } from "./reducerProps"
import cmsPortfolioModifiers from "../logic/cmsPortfolioModifiers"

export default (state = initialPortfolioContent, { type, payload }) => {
  switch (type) {

    case FETCHED_CMS_PORTFOLIO_DATA:
      console.log(payload, 'payloadpayload');
      return payload

    case ON_CHANGE_VALUE:
      return cmsPortfolioModifiers.onChangeValue(payload, state)

    case DELETE_CERTAIN_PORTFOLIO_ITEM:
      return cmsPortfolioModifiers.deleteItemOnClick(payload, state)

    case NEW_ADDITION_TO_CMS_CONTENT:
      return cmsPortfolioModifiers.newAdditionOnClick(payload, state)

    default:
      return state
  }
}
