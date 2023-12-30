import axios from 'axios'
const baseUrl = 'http://localhost:3030/api/translate'
const url = require('url')

const translate = async (text: string) => {
	console.log(text);
	const response = await axios.post(baseUrl, {word: text})

	return response
}

const translateService = { translate }

export default translateService
