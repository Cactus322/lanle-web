import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Menu,
	MenuItem,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'
import { switchToRegistration } from '@/reducers/registrationReduser'
import { connect } from 'react-redux'
import { switchToRegistrationType } from '@/pages/login/Login.types'
import Link from 'next/link'

const Navigation = ({
	switchToRegistration,
}: {
	switchToRegistration: switchToRegistrationType
}) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<Typography
					variant="h6"
					color="inherit"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					Lanle WEB
				</Typography>
				<Button
					color="inherit"
					id="basic-button"
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					<PersonIcon />
				</Button>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<MenuItem onClick={() => switchToRegistration(false)}>
						<Link href="/login">Login</Link>
					</MenuItem>
					<MenuItem onClick={() => switchToRegistration(true)}>
						<Link href="/login">Sign In</Link>
					</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	)
}

const mapDispatchProps = {
	switchToRegistration,
}

export default connect(null, mapDispatchProps)(Navigation)
