import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import loginService from '@/services/login'
import { IUser } from '@/types'
import { IDispatchLoginString, ILoginSlice } from './loginReducer.types'

const loginSlice = createSlice({
	name: 'login',
	initialState: {},
	reducers: {
		create(_state, action: PayloadAction<ILoginSlice>) {
			return action.payload
		},
	},
})

export const { create } = loginSlice.actions

export const addUser = (credential: IUser) => {
	return async (dispatch: Dispatch<IDispatchLoginString>) => {
		const user = await loginService.login(credential)
		if (user.error) {
			dispatch(create({type: 'error', state: user.error}))
		} else {
			window.localStorage.setItem('loggedUser', JSON.stringify(user))
			if (user) {
				dispatch(create({type: 'token', state: user}))
			} 
		}
		
	}
}

export const removeUserInfo = () => {
    return (dispatch: Dispatch<IDispatchLoginString>) => {
        window.localStorage.clear()
        dispatch(create({
			type: null,
			state: null
		}))
    }
}

export default loginSlice.reducer
