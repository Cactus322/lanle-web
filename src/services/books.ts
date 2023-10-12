import { IBook } from '@/types'
import axios from 'axios'
const baseUrl = 'http://localhost:3030/api/books'

if (typeof window !== 'undefined') {
	console.log(localStorage.getItem('loggedUser'));
}

const getAll = async (token: string | null) => {
	const config = {
		headers: { Authorization: token },
	}

	const request = await axios.get(baseUrl, config)

	const booksUrl = request.data.map((e: { bookUrl: string }) => e.bookUrl)
	return booksUrl
}

const create = async (bookObject: IBook, token: string | null) => {
	const config = {
		headers: { Authorization: token },
	}

	const response = await axios
		.post(baseUrl, bookObject, config)
		.then((response) => response.data)
		.catch((err) => {
			if (err.response) {
				return err.response.data
			} else if (err.request) {
				return err.request.data
			} else {
				return err.message
			}
		})

	return response
}

const bookService = { getAll, create }

export default bookService
