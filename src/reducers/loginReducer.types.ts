export interface ILoginSlice {
    type?: string
    state?: string
}

export interface IDispatchLoginString {
    payload: ILoginSlice
    type: string
}