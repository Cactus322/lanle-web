import { Box } from '@mui/material'
import Link from 'next/link'

export const Home = () => {
	return (
		<Box>
			<Link href="/add-book">Add Book</Link>
			<Link href="/books-list">My books</Link>
			<Link href="/dictionary">Dictionary</Link>
		</Box>
	)
}

export default Home
