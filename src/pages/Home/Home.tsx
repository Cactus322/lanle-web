import { Box } from '@mui/material'
import Navigation from '@/components/Navigation/Navigation'
import Notice from '@/components/Notice/Notice'
import Link from 'next/link'

export const Home = () => {
	return (
		<Box>
			<Navigation />
			<Notice />

			<Link href="/addBook">Add Book</Link>
		</Box>
	)
}

export default Home
