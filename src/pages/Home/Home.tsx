import {
	AppBar,
	Box,
	Button,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import { Router } from 'next/router'
import Navigation from '@/components/Navigation/Navigation'

export const Home = () => {

	return (
		<Box component="div">
			<Navigation />
		</Box>
	)
}

export default Home
