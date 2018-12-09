
const prefix = (prf:string, str:string) => prf + '/' + str

const MODULE = 'ModuleB'

export namespace ActionType {
  export const SET_NAME = prefix(MODULE, 'SET_NAME')
  export const ADD_COUNT = prefix(MODULE, 'ADD_COUNT')
}
console.log(ActionType)

export type Action = {
  //todo: can this be simplified?
  type: typeof ActionType[keyof typeof ActionType]
  [key:string]: any
}

export const setNameAction = (name: string):Action => ({
  type: ActionType.SET_NAME,
  name: name,
})