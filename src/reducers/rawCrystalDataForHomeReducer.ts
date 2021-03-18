import {
  FETCHED_CRYSTAL_DATA_FOR_HOME,
  RESET_CRYSTAL_DATA_FOR_HOME,
} from "../actions/constants";
import { crystalParallaxDefault } from "parallax-effect-crystals";

export default (state = crystalParallaxDefault, { type, payload }) => {
  switch (type) {
    case FETCHED_CRYSTAL_DATA_FOR_HOME:
      return payload;

    case RESET_CRYSTAL_DATA_FOR_HOME:
      return crystalParallaxDefault;

    default:
      return state;
  }
};
