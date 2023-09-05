import { Box, FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { useState } from "react"
import { connect } from "react-redux"
import { addBook } from "@/reducers/bookReducer"
import { error } from "console"

const AddBook = () => {
    const [bookLink, setBookLink] = useState('')
    
    const handleSubmit =async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            addBook(bookLink)
        } catch (exception) {
            console.error('Wrong link')
        }
    }

    return (
        <Box component="form">
            <FormControl
                onSubmit={handleSubmit}
            >
				<InputLabel htmlFor="login-username">Link</InputLabel>
				<OutlinedInput
					id="login-username"
					type="text"
					label="Link"
                    placeholder="Enter a link to the book"
                    value={bookLink}
                    onChange={({target}) => setBookLink(target.value)}
				/>
			</FormControl>
        </Box>
    )
}

const mapDispatchProps = {
	addBook,
}

export default connect(null, mapDispatchProps)(AddBook)