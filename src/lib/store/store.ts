import { configureStore } from '@reduxjs/toolkit'
import workFlowReducer from './work-flow-slice'
import featureReducer from './feature-slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      workflow: workFlowReducer,
      feature: featureReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
