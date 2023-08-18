import { useState } from 'react'

export const FileUploader = () => {
	const [bookUrl, setBookUrl] = useState('')

	const bookFileValidation = (file: Blob) => {
		const format = file.type === 'application/epub+zip'

		if (!format) {
			console.error('hoba')
		} else {
            setBookUrl(URL.createObjectURL(file))
		}
	}

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (event.target.files) {
			const file = event.target.files[0]
			bookFileValidation(file)
		}
	}

	return (
		<form>
			<h1>React File Upload</h1>
			<input type="file" onChange={handleChange} />
			<button type="submit">Upload</button>
		</form>
	)
}
