import { Box, Button, Stack } from '@mui/material'
import { connect } from 'react-redux'
import Link from 'next/link'
import { IBookSlice } from './BookList.types'
import AddIcon from '@mui/icons-material/Add'
import { blueGrey } from '@mui/material/colors'
import { Key } from 'react'
import { FileUpload } from '@mui/icons-material'
import { FileUploader } from '@/components/FileUploader/FileUploader'

const BooksList = ({ book }: { book: [string] }) => {
	return (
		<Box>
			<Stack
				spacing={3}
				direction="row"
				flexWrap="wrap"
				useFlexGap
				sx={{
					display: 'flex',
					justifyContent: 'center',
					mt: 3,
				}}
			>
				{book.map((b) => (
					<Box>
						<FileUploader />
						<Link
							href={{ pathname: '/reader', query: { book: b } }}
							key={b}
						>{b}</Link>
					</Box>
				))}
			</Stack>
		</Box>
	)
}

const mapStateToProps = ({ book }: { book: [string] }) => {
	return {
		book: book,
	}
}

export default connect(mapStateToProps, null)(BooksList)
