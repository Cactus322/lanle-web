import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from '@/reducers/loginReducer'
import { setNotice } from '@/reducers/noticeReducer'
import { addUserFunctionType, setNoticeFunctionType } from './Login.types'
import registrationService from '@/services/registration'
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	OutlinedInput,
} from '@mui/material'
import { ILoginSlice } from '@/reducers/loginReducer.types'

const Login = ({
	addUser,
	setNotice,
	registration,
	login,
}: {
	addUser: addUserFunctionType
	setNotice: setNoticeFunctionType
	registration: boolean
	login: ILoginSlice
}) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		if (login.type === 'error') {
			setNotice('Wrong credentials', 3, 'error')
		}
	}, [login])

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()

		addUser({ username, password })
	}

	const handleRegistration = async (e: React.FormEvent) => {
		e.preventDefault

		try {
			await registrationService.registration({ username, password })
			addUser({ username, password })
		} catch (exception) {
			console.error('Wrong credentials')
		}
	}

	return (
		//Интересная ошибка. Если button type = submit, то при попытке зарегистрировать пользователя,
		//получаем ошибку RequsetAborted
		<Box
			component="form"
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
			<Button
				variant="outlined"
				type="button"
				onClick={registration ? handleRegistration : handleLogin}
			>
				{registration ? 'Registration' : 'Login'}
			</Button>
		</Box>
	)
}

const mapStateToProps = ({ registration, login }: { registration: boolean, login: ILoginSlice }) => {
	return {
		registration: registration,
		login: login
	}
}

const mapDispatchProps = {
	addUser,
	setNotice,
}

export default connect(mapStateToProps, mapDispatchProps)(Login)
