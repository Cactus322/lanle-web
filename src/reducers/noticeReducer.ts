import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INoticeActionCreate, INoticeSliceCreate } from './noticeReducer.types'
import { AlertColor } from '@mui/material'

const noticeSlice = createSlice({
	name: 'notice',
	initialState: {},
	reducers: {
		createNotice(_state, action: PayloadAction<INoticeActionCreate>) {
			return action.payload
		},
	},
})

export const { createNotice } = noticeSlice.actions

export const setNotice = (
	notice: string,
	removeTimeout: number,
	type: AlertColor
) => {
	return (dispatch: Dispatch<INoticeSliceCreate>) => {
		const removeTimeoutMsec = removeTimeout * 1000
		
		dispatch(createNotice({ content: notice, type: type }))
		setTimeout(() => dispatch(createNotice({})), removeTimeoutMsec)
	}
}

export default noticeSlice.reducer