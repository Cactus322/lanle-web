import { useRef, useState, useEffect } from 'react'

import { Box, Button, Typography } from '@mui/material'
import {
	ReactReader,
	ReactReaderStyle,
	type IReactReaderStyle,
} from 'react-reader'
import { connect } from 'react-redux'
import { Rendition, Contents } from 'epubjs'
import { IRendetionCurrent, ISelectedText } from './Reader.types'
import { Close } from '@mui/icons-material'
type ITheme = 'light' | 'dark'

export const Reader = ({ book }: { book: string }) => {
	const [selectionPopup, setSelectionPopup] = useState<boolean>(true)
	const [location, setLocation] = useState<string | number>(2)
	const rendition = useRef<Rendition | undefined>(undefined)
	const [theme, setTheme] = useState<ITheme>('dark')

	const [selections, setSelections] = useState<ISelectedText[]>([])
	const renditionRef = useRef<any>(null)

	const setRenderSelection = (cfiRange: string, contents: Contents) => {
		if (renditionRef.current) {
			setSelections(
				selections.concat({
					text: renditionRef.current.getRange(cfiRange).toString(),
					cfiRange,
				})
			)

			renditionRef.current.annotations.add(
				'highlight',
				cfiRange,
				{},
				null,
				'hl',
				{
					fill: 'red',
					'fill-opacity': '0.5',
					'mix-blend-mode': 'multiply',
				}
			)
			const selection = contents.window.getSelection()
			selection?.removeAllRanges()
		}
	}

	useEffect(() => {
		if (renditionRef.current) {
			selections.length && setSelectionPopup(false)

			renditionRef.current.on('selected', setRenderSelection)
			return () => {
				renditionRef.current.off('selected', setRenderSelection)
			}
		}
	}, [selections])

	function updateTheme(rendition: Rendition, theme: ITheme) {
		const themes = rendition.themes
		switch (theme) {
			case 'dark': {
				themes.override('color', '#fff')
				themes.override('background', '#1d1d2f')
				break
			}
			case 'light': {
				themes.override('color', '#000')
				themes.override('background', '#fff')
				break
			}
		}
	}

	useEffect(() => {
		if (rendition.current) {
			updateTheme(rendition.current, theme)
		}
	}, [theme])

	const darkReaderTheme: IReactReaderStyle = {
		...ReactReaderStyle,
		arrow: {
			...ReactReaderStyle.arrow,
			color: 'white',
		},
		arrowHover: {
			...ReactReaderStyle.arrowHover,
			color: '#ccc',
		},
		readerArea: {
			...ReactReaderStyle.readerArea,
			backgroundColor: '#1d1d2f',
			transition: undefined,
			filter: !selectionPopup ? 'brightness(40%)' : '',
		},
		titleArea: {
			...ReactReaderStyle.titleArea,
			color: '#ccc',
		},
		tocArea: {
			...ReactReaderStyle.tocArea,
			background: '#1d1d2a',
		},
		tocAreaButton: {
			...ReactReaderStyle.tocAreaButton,
			color: 'white',
		},
		tocButtonExpanded: {
			...ReactReaderStyle.tocButtonExpanded,
			background: '#1d1d2f',
		},
		tocButtonBar: {
			...ReactReaderStyle.tocButtonBar,
			background: '#fff',
		},
		tocButton: {
			...ReactReaderStyle.tocButton,
			color: 'white',
		},
	}

	const lightReaderTheme: IReactReaderStyle = {
		...ReactReaderStyle,
		readerArea: {
			...ReactReaderStyle.readerArea,
			transition: undefined,
		},
	}

	console.log(selectionPopup)

	return (
		<>
			<Box sx={{ height: '100vh' }}>
				<ReactReader
					url={book}
					readerStyles={
						theme === 'dark' ? darkReaderTheme : lightReaderTheme
					}
					location={location}
					locationChanged={(loc: string) => setLocation(loc)}
					getRendition={(_rendition: IRendetionCurrent) => {
						updateTheme(_rendition, theme)
						_rendition.current = rendition

						renditionRef.current = _rendition
						renditionRef.current.themes.default({
							'::selection': {
								background: 'orange',
							},
						})
						setSelections([])
					}}
				/>
				<Box
					hidden={selectionPopup}
					sx={{
						backgroundColor: '#1d1d2a',
						position: 'fixed',
						bottom: 0,
						width: '100%',
						height: 200,
						borderTopRightRadius: '10px',
						borderTopLeftRadius: '10px',
						zIndex: 50,
					}}
				>
					<Button>
						<Close sx={{color: 'white'}}/>
					</Button>
					<ul className="grid grid-cols-1 divide-y divide-stone-400 border-t border-stone-400 -mx-2">
						{selections.map(({ text, cfiRange }, i) => (
							<li key={i} className="p-2">
								<span>{text}</span>
								<button
									className="underline hover:no-underline text-sm mx-1"
									onClick={() => {
										renditionRef?.current.display(cfiRange)
									}}
								>
									Show
								</button>

								<button
									className="underline hover:no-underline text-sm mx-1"
									onClick={() => {
										renditionRef?.current.annotations.remove(
											cfiRange,
											'highlight'
										)
										setSelections(
											selections.filter(
												(item, j) => j !== i
											)
										)
									}}
								>
									Remove
								</button>
							</li>
						))}
					</ul>
				</Box>
			</Box>
		</>
	)
}

// const mapStateToProps = ({ book }: { book: string }) => {
// 	return {
// 		book: book,
// 	}
// }

export default connect(null, null)(Reader)
