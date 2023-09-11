import loginReducer from '@/reducers/loginReducer'
import noticeReducer from '@/reducers/noticeReducer'
import bookReducer from '@/reducers/bookReducer'
import registrationReduser from '@/reducers/registrationReduser'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const store = configureStore({
	reducer: {
		login: loginReducer,
		registration: registrationReduser,
		notice: noticeReducer,
		book: bookReducer,
	},
	middleware: [thunk],
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
