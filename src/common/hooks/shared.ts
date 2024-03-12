// This reducer is used when you have a simple state that doesn't
// require you to process any side effects. Ideally you would use
// this reducer to combine a lot of useStates
export const stateReducer = <T>(state: T, action: Partial<T>): T => ({
  ...state,
  ...action,
});
