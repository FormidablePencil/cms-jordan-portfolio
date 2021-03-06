import { FETCHED_CRYSTAL_DATA, RESET_CRYSTAL_DATA } from "../actions/constants";
import { crystalParallaxDefault } from "parallax-effect-crystals";

export default (state = crystalParallaxDefault, { type, payload }) => {
  switch (type) {
    case FETCHED_CRYSTAL_DATA:
      return payload;

    case RESET_CRYSTAL_DATA:
      return crystalParallaxDefault;

    default:
      return state;
  }
};

