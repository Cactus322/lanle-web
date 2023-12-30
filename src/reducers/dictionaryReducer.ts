import dictionaryService from "@/services/dictionary";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper'
import { IDispatchDefaultString } from './types'

const dictionarySlice = createSlice({
    name: 'dictionary',
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

export const {create, addNew} = dictionarySlice.actions

export const addDictionary = (dictionary) => {
    return async (dispatch) => {
		await dictionaryService.create(dictionary)
		dispatch(addNew(dictionary))
	}
}

export default dictionarySlice.reducer
