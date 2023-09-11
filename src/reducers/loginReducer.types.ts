export interface ILoginSlice {
    type: string | null
    state: string | null
}

export interface IDispatchLoginString {
    payload: ILoginSlice
    type: string
}