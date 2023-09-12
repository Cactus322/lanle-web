import { AlertColor } from "@mui/material"

export interface IUser {
    username: string
    password: string
}

export type setNoticeFunctionType = (
	notice: string,
	removeTimeout: number,
	type: AlertColor
) => void
