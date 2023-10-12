import BooksList from './BooksList'
import { GetServerSideProps } from 'next'
import { wrapper } from '@/app/store'
import { create } from '@/reducers/bookReducer'
import bookService from '@/services/books'

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps((store) => async () => {
        const book = await bookService.getAll('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpZCI6IjY0ZDkyOWQ2ODg3OTQ3NjNjOTQ3NDMwYiIsImlhdCI6MTY5NjE3NDMwMn0.mzDWdEqHNxldLo9fXYDKCVS4K0lTYnU_ceKYbIVJ6Mw')
		store.dispatch(create(book))

		return { props: {
		} }
	})

export default BooksList
