import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TPathDetails } from '@/components/home/hero/connection-node'

type TPathsState = {
  pathOne: TPathDetails
  pathTwo: TPathDetails
  pathThree: TPathDetails
}

const initialState: TPathsState = {
  pathOne: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    controlOffset: 0,
  },
  pathThree: { x1: 0, y1: 0, x2: 0, y2: 0, controlOffset: 0 },
  pathTwo: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    controlOffset: 0,
  },
}

type pathName = keyof TPathsState

export const workFlowSlice = createSlice({
  name: 'workflow-slice',
  initialState,
  reducers: {
    updatePath: (
      state,
      action: PayloadAction<{ pathName: pathName; pathDetails: TPathDetails }>
    ) => {
      const { pathName, pathDetails } = action.payload
      state[pathName] = pathDetails
    },
    updateAllPath: (state, action: PayloadAction<{ paths: TPathsState }>) => {
      const { paths } = action.payload
      return paths
    },
  },
})

export const { updatePath, updateAllPath } = workFlowSlice.actions
export default workFlowSlice.reducer
