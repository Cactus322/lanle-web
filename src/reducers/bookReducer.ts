import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IDispatchDefaultString } from './types'
import { HYDRATE } from 'next-redux-wrapper'

const bookSlice = createSlice({
	name: 'book',
	initialState: '',
	reducers: {
		create(_state, action: PayloadAction<string>) {
			console.log(_state);
			return action.payload
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			console.log(action.payload);
			return state = {
				state,
				...action.payload.book
			}
		}
	}
})

export const { create } = bookSlice.actions

export const addBook = (credential: string) => {
    return async (dispatch: Dispatch<IDispatchDefaultString>) => {
        dispatch(create(credential))
    }
}

export default bookSlice.reducer