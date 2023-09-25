import { useRef, useState, useEffect } from 'react'

import { ReactReader } from 'react-reader'
import { Contents } from 'epubjs'
import { FileUploader } from '@/components/FileUploader/FileUploader'
import Home from './home/Home'
import { GetServerSideProps } from 'next'
import { wrapper } from '@/app/store'
import axios from 'axios'
import { addBook, create } from '@/reducers/bookReducer'

export default function Index() {
	interface ISelectedText {
		text: string
		cfiRange: string
	}

	const [selections, setSelections] = useState<ISelectedText[]>([])
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
	}, [setSelections, selections])

	const [bookUrl, setBookUrl] = useState('')

	const bookFileValidation = (file: Blob) => {
		const format = file.type === 'application/epub+zip'

		if (!format) {
			console.error('hoba')
		} else {
			setBookUrl(URL.createObjectURL(file))
		}
	}

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (event.target.files) {
			const file = event.target.files[0]
			bookFileValidation(file)
		}
	}

	return (
		<Home />

		// <>
		// <form>
		// 	<h1>React File Upload 1</h1>
		// 	<input type="file" onChange={handleChange} />
		// 	<button type="submit">Upload</button>
		// </form>
		// 	{/* <FileUploader /> */}
		// 	<div style={{ height: '100vh' }}>
		// 		<ReactReader
		// 			url="https://react-reader.metabits.no/files/alice.epub"
		// 			getRendition={(rendition) => {
		// 				renditionRef.current = rendition
		// 				renditionRef.current.themes.default({
		// 					'::selection': {
		// 						background: 'orange',
		// 					},
		// 				})
		// 				setSelections([])
		// 			}}
		// 		/>
		// 	</div>
		// 	<div
		// 		style={{
		// 			position: 'absolute',
		// 			bottom: '1rem',
		// 			right: '1rem',
		// 			zIndex: 1,
		// 			backgroundColor: 'white',
		// 		}}
		// 	>
		// 		Selection:
		// 		<ul>
		// 			{selections.map(({ text, cfiRange }, i: number) => (
		// 				<li key={i}>
		// 					{text}{' '}
		// 					<button
		// 						onClick={() => {
		// 							renditionRef.current.display(cfiRange)
		// 						}}
		// 					>
		// 						Show
		// 					</button>
		// 					<button
		// 						onClick={() => {
		// 							renditionRef.current.annotations.remove(
		// 								cfiRange,
		// 								'highlight'
		// 							)
		// 							setSelections(
		// 								selections.filter((item, j) => j !== i)
		// 							)
		// 						}}
		// 					>
		// 						x
		// 					</button>
		// 				</li>
		// 			))}
		// 		</ul>
		// 	</div>
		// </>
	)
}

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps((store) => async (ctx) => {
		// store.dispatch(create('123'))

		return { props: {
		} }
	})