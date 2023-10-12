import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IDispatchDefaultString } from './types'
import { HYDRATE } from 'next-redux-wrapper'
import bookService from '@/services/books'

const bookSlice = createSlice({
	name: 'book',
	initialState: [],
	reducers: {
		create(_state, action) {
			return action.payload
		},
		addNew(state, action) {
			const books = [...state]

			return books.concat(action.payload)
		},
	},
	extraReducers: {
		[HYDRATE]: (_state, action) => {

			return action.payload.book
		},
	},
})

export const { create, addNew } = bookSlice.actions

export const addBook = (credential: string) => {
	return async (dispatch: Dispatch<IDispatchDefaultString>) => {
		await bookService.create({ bookUrl: credential }, 'token')
		dispatch(addNew(credential))
	}
}

export default bookSlice.reducer
