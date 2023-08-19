import { IUser } from '@/types';
import axios from 'axios'
const baseUrl = 'http://localhost:3030/api/users'

const registration = async (credential: IUser) => {
	const response = await axios.post(baseUrl, credential)

	return response.status
}

const registrationService = { registration }

export default registrationService
