import { IBook } from '@/types'
import axios from 'axios'
const baseUrl = 'http://localhost:3030/api/books'

let token: string | null = null

const setToken = (newToken: string) => {
	token = `bearer ${newToken}`
}

const config = {
	headers: { Authorization: token },
}

const getAll = () => {
	const request = axios.get(baseUrl, config).then((response) => response.data)

	return request
}

const create = async (bookObject: IBook) => {
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

const bookService = { getAll, create, setToken }

export default bookService
