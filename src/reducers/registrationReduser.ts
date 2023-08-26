import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ILoginSliceRegistration } from './registrationReducer.types'

const loginSlice = createSlice({
	name: 'registration',
	initialState: false,
	reducers: {
		registration(_state, action: PayloadAction<boolean>) {
			return action.payload
		},
	},
})

export const { registration } = loginSlice.actions

export const switchToRegistration = (prop: boolean) => {
	return async (dispatch: Dispatch<ILoginSliceRegistration>) => {
		dispatch(registration(prop))
	}
}

export default loginSlice.reducer
