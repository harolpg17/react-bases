export type CounterAction = 
  | { type: 'incraseBy', payload: { value: number } }
  | { type: 'reset' }

export const doReset = (): CounterAction => {
  return {
    type: 'reset'
  }
}

export const doIncraseBy = (value: number): CounterAction => {
  return {
    type: 'incraseBy',
    payload: {
      value
    }
  }
}