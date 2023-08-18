import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import loginService from '@/services/login'
import { IUser } from '@/types'
import { ILoginSlice } from './loginReducer.types'

const loginSlice = createSlice({
	name: 'login',
	initialState: {},
	reducers: {
		create(_state, action: PayloadAction<string>) {
			return action.payload
		},
		remove() {
			return ''
		},
	},
})

export const {create, remove} = loginSlice.actions


export const addUser = (credential: IUser) => {
	return async (dispatch: Dispatch<ILoginSlice>) => {
		const user = await loginService.login(credential)
		window.localStorage.setItem('loggedUser', JSON.stringify(user))
		dispatch(create(user))
	}
}

export default loginSlice.reducer