import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import loginService from '@/services/login'
import { IUser } from '@/types'
import { ILoginSliceCreate } from './loginReducer.types'

const loginSlice = createSlice({
	name: 'login',
	initialState: '',
	reducers: {
		create(_state, action: PayloadAction<string>) {
			return action.payload
		},
	},
})

export const { create } = loginSlice.actions

export const addUser = (credential: IUser) => {
	return async (dispatch: Dispatch<ILoginSliceCreate>) => {
		const user = await loginService.login(credential)
		window.localStorage.setItem('loggedUser', JSON.stringify(user))
		dispatch(create(user))
	}
}

export const removeUserInfo = () => {
    return (dispatch: Dispatch<ILoginSliceCreate>) => {
        window.localStorage.clear()
        dispatch(create(''))
    }
}

export default loginSlice.reducer
