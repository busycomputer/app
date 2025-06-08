import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface FeatureHoverPayload {
  id: string
  isHovered: boolean
}
export const featureSlice = createSlice({
  name: 'feature-slice',
  initialState: {
    featureCardHover: {} as Record<string, boolean>,
  },
  reducers: {
    setFeatureHover(state, action: PayloadAction<FeatureHoverPayload>) {
      const { id, isHovered } = action.payload
      state.featureCardHover[id] = isHovered
    },
  },
})

export const { setFeatureHover } = featureSlice.actions
export default featureSlice.reducer
