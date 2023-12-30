import axios from 'axios'

const baseUrl = 'http://localhost:3030/api/dictionary'

const getAll = async (token: string) => {
	const config = {
		headers: { Authorization: token },
	}

	const request = await axios.get(baseUrl, config)

	const dictionary = request.data
	return dictionary
}

interface IDictionaryText {
	wordEn: string
	wordRu: string
}

const create = async (text: IDictionaryText, token: string) => {
	const config = {
		headers: { Authorization: token },
	}

	const response = await axios
		.post(baseUrl, text, config)
		.then((response) => response.data)

	return response
}

const dictionaryService = { getAll, create }

export default dictionaryService
