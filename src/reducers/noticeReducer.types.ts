import { AlertColor } from "@mui/material"

export interface INoticeActionCreate {
    content: string
    type: AlertColor | undefined
}

export interface INoticeSliceCreate {
	payload: INoticeActionCreate
	type: string
}
