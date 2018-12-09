import {Action, ActionType} from "./actions";

export const reducer = (state:Object, action:Action):Object => {

  // if (action === Action.ADD_COUNT) {
  //   return state
  // }

  switch (action.type) {
    case ActionType.SET_NAME:
      return state
    case ActionType.ADD_COUNT:
      return state
    case 'other':
      return state
    default:
      return state
  }

  return state
}