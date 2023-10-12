import {
	Box,
	Button,
	FormControl,
	InputLabel,
	OutlinedInput,
} from '@mui/material'
import { useState } from 'react'
import { connect } from 'react-redux'
import { addBook } from '@/reducers/bookReducer'
import { setNotice } from '@/reducers/noticeReducer'

import { setNoticeFunctionType } from '@/types'
import { addBookFunctionType } from './AddBook.types'

const AddBook = ({
	addBook,
	setNotice,
}: {
	addBook: addBookFunctionType
	setNotice: setNoticeFunctionType
}) => {
	const [bookLink, setBookLink] = useState('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		addBook(bookLink)
		setNotice('Book is added', 3, 'success')
	}

	return (
		<Box
			component="form"
			className="position center"
			onSubmit={handleSubmit}
		>
			<FormControl>
				<InputLabel htmlFor="login-username">Link</InputLabel>
				<OutlinedInput
					id="login-username"
					type="text"
					label="Link"
					placeholder="Enter a link to the book"
					value={bookLink}
					onChange={({ target }) => setBookLink(target.value)}
				/>
			</FormControl>
			<Button type="submit" variant="outlined">
				Hoba
			</Button>
		</Box>
	)
}

const mapDispatchProps = {
	addBook,
	setNotice,
}

export default connect(null, mapDispatchProps)(AddBook)
