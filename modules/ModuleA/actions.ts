/** Utility function to create a K:V from a list of strings */
const strEnum = <T extends string>(moduleName: string, o:Array<T>):{ [K in T]:K } => {
  return o.reduce((res, key) => {
    res[key] = moduleName + "/" + key;
    return res;
  }, Object.create(null));
}

/** Create a K:V */
export const Action = strEnum('ModuleA', [
  'SET_NAME',
  'ADD_COUNT',
])
// console.log(Action);

/** Create a Type */
export type Action = keyof typeof Action;



const action:Action = Action.SET_NAME;
console.log(action);
