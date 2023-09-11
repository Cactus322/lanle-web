import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IDispatchDefaultString } from './types'

const bookSlice = createSlice({
	name: 'book',
	initialState: '',
	reducers: {
		create(_state, action: PayloadAction<string>) {
			return action.payload
		},
	},
})

export const { create } = bookSlice.actions

export const addBook = (credential: string) => {
    return async (dispatch: Dispatch<IDispatchDefaultString>) => {
        dispatch(create(credential))
    }
}

export default bookSlice.reducer