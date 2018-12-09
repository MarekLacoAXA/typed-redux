/** Utility function to create a K:V from a list of strings */
const strEnum = <T extends string>(moduleName: string, o:Array<T>):{ [K in T]:K } => {
  return o.reduce((res, key) => {
    res[key] = moduleName + "/" + key;
    return res;
  }, Object.create(null));
}

/** Create a K:V */
export const ActionType = strEnum('ModuleA', [
  'SET_NAME',
  'ADD_COUNT',
])
// console.log(Action);

/** Create a Type */
export type ActionType = keyof typeof ActionType;



const actionType:ActionType = ActionType.SET_NAME;
console.log(actionType);


export type Action = {
  type: ActionType
  [key:string]: any
}

export const setNameAction:Action = {
  type: ActionType.SET_NAME
}

export const setNameActionFn = (name: string):Action => ({
  type: ActionType.SET_NAME,
  name: name,
})