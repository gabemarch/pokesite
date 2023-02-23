import { GeneralActionTypes } from "../actions/general"

const initialState = {
  isModalOpen: false
}

export const generalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GeneralActionTypes.HANDLE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload
      }
    default:
      return state;
  }
}