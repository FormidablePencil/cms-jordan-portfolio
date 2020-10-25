import { FETCHED_CRYSTAL_DATA } from "../actions/constants"
import crystalParallaxDefault from "../constants/parallaxCrystalProps"

export default (state = crystalParallaxDefault, { type, payload }) => {
  switch (type) {

    case FETCHED_CRYSTAL_DATA:
      return payload

    default:
      return state
  }
}