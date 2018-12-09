import {Action} from "./actions";

export const reducer = (state:Object, action:Action):Object => {

  // if (action === Action.ADD_COUNT) {
  //   return state
  // }

  switch (action) {
    case Action.SET_NAME:
      return state
    case Action.ADD_COUNT:
      return state
    default:
      return state
  }

  return state
}