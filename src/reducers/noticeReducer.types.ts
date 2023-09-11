import { AlertColor } from "@mui/material"

export interface INoticeActionCreate {
    content?: string
    type?: AlertColor
}

export interface INoticeSliceCreate {
	payload: INoticeActionCreate
	type: string
}

export interface INotice {
    notice: string,
	removeTimeout: number,
	type: AlertColor
}