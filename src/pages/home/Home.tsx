import { Box } from '@mui/material'
import Link from 'next/link'

export const Home = () => {
	return (
		<Box>
			<Link href="/addBook">Add Book</Link>
		</Box>
	)
}

export default Home
