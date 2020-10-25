import { RESET_AUTH, UPDATE_AUTH_PASSWORD, UPDATE_AUTH_USERNAME } from "../actions/constants"

const initialState = { username: '', password: '' }
export interface controlledAuthT { username: string, password: string }

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case RESET_AUTH:
      return initialState

    case UPDATE_AUTH_USERNAME:
      return { ...state, username: payload }

    case UPDATE_AUTH_PASSWORD:
      return { ...state, password: payload }

    default:
      return state
  }
}
