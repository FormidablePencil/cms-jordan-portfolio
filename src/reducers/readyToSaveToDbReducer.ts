import { READY_TO_SAVE } from "../actions/constants"

const initialState = false

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case READY_TO_SAVE:
      return payload

    default:
      return state
  }
}
