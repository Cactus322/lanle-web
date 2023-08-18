import { IUser } from '@/types';
import axios from 'axios'
const baseUrl = 'http://localhost:3030/api/login'

const login = async (credential: IUser) => {
    console.log(credential);
	const response = await axios.post(baseUrl, credential)

	return response.data
}

const loginService = { login }

export default loginService
