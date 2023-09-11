import { IUser } from '@/types'
import axios from 'axios'
const baseUrl = 'http://localhost:3030/api/login'

const login = async (credential: IUser) => {
	const response = await axios
		.post(baseUrl, credential)
		.then((res) => {
			return res.data
		})
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

const loginService = { login }

export default loginService
