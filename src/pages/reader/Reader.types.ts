import { Rendition } from 'epubjs'

export interface ISelectedText {
    text: string
    cfiRange: string
}

export interface IRendetionCurrent extends Rendition {
    current: any
}