import { useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from '@/reducers/loginReducer'

import {
	Box,
	Button,
	FormControl,
	InputLabel,
	OutlinedInput,
} from '@mui/material'
import { addUserFunction } from './types'


const Login = ({ addUser }: { addUser: addUserFunction }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			addUser({ username, password })
		} catch (exception) {
			console.log('Wrong credentials')
		}
	}

	return (
		<Box
			component="form"
			onSubmit={handleLogin}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 3,
				width: 250,
				m: '0 auto',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, 50%)',
				borderColor: 'palegreen',
			}}
			autoComplete="true"
		>
			<FormControl>
				<InputLabel htmlFor="login-username">Username</InputLabel>
				<OutlinedInput
					id="login-username"
					type="text"
					label="Username"
					value={username}
					onChange={({ target }) => setUsername(target.value)}
				/>
			</FormControl>
			<FormControl>
				<InputLabel htmlFor="login-username">Password</InputLabel>
				<OutlinedInput
					id="login-password"
					type="text"
					label="Password"
					value={password}
					onChange={({ target }) => setPassword(target.value)}
				/>
			</FormControl>
			<Button variant="outlined" type="submit">
				Login
			</Button>
		</Box>
	)
}

const mapDispatchProps = {
	addUser,
}

export default connect(null, mapDispatchProps)(Login)
