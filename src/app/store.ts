import loginReducer from '@/reducers/loginReducer'
import noticeReducer from '@/reducers/noticeReducer'
import bookReducer from '@/reducers/bookReducer'
import registrationReduser from '@/reducers/registrationReduser'
import { Action, configureStore } from '@reduxjs/toolkit'
import thunk, { ThunkAction } from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'

export function makeStore() {
	return configureStore({
		reducer: {
			login: loginReducer,
			registration: registrationReduser,
			notice: noticeReducer,
			book: bookReducer,
		},
		middleware: [thunk],
	})
}

export const store = makeStore()

// const store = configureStore({
// 	reducer: {
// 		login: loginReducer,
// 		registration: registrationReduser,
// 		notice: noticeReducer,
// 		book: bookReducer,
// 	},
// 	middleware: [thunk],
// })

// export default store

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStore, unknown, Action>;

// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper<RootStore>(makeStore, {debug: true});