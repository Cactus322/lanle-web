import { useRef, useState, useEffect } from 'react'

import { Box } from '@mui/material'
import { ReactReader } from 'react-reader'
import { connect } from 'react-redux'
// import { Contents } from 'epubjs'

export const Reader = ({book} : {book: string}) => {
	interface ISelectedText {
		text: string
		cfiRange: string
	}

	const [selections, setSelections] = useState<ISelectedText[]>([])
	console.log(book)
	const renditionRef = useRef<any>(null)

	const setRenderSelection = (cfiRange: string, contents: any) => {
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
			contents.window.getSelection().removeAllRanges()
		}
	}

	useEffect(() => {
		if (renditionRef.current) {
			renditionRef.current.on('selected', setRenderSelection)
			return () => {
				renditionRef.current.off('selected', setRenderSelection)
			}
		}
	}, [selections])

	return (
		<>
			<Box sx={{ height: '100vh' }}>
				<ReactReader
					url={book}
					getRendition={(rendition) => {
						renditionRef.current = rendition
						renditionRef.current.themes.default({
							'::selection': {
								background: 'orange',
							},
						})
						setSelections([])
					}}
				/>
			</Box>
			{/* <Box
				style={{
					position: 'absolute',
					bottom: '1rem',
					right: '1rem',
					zIndex: 1,
					backgroundColor: 'white',
				}}
			>
				Selection:
				<ul>
					{selections.map(({ text, cfiRange }, i: number) => (
						<li key={i}>
							{text}{' '}
							<button
								onClick={() => {
									renditionRef.current.display(cfiRange)
								}}
							>
								Show
							</button>
							<button
								onClick={() => {
									renditionRef.current.annotations.remove(
										cfiRange,
										'highlight'
									)
									setSelections(
										selections.filter((item, j) => j !== i)
									)
								}}
							>
								x
							</button>
						</li>
					))}
				</ul>
			</Box> */}
		</>
	)
}

// const mapStateToProps = ({ book }: { book: string }) => {
// 	return {
// 		book: book,
// 	}
// }

export default connect(null, null)(Reader)
