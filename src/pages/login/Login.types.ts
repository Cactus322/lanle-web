import { INotice } from '@/reducers/noticeReducer.types'
import { IUser } from '@/types'
import { AlertColor } from '@mui/material'

export type addUserFunctionType = (userCredentials: IUser) => void
export type switchToRegistrationType = (prop: boolean) => void
