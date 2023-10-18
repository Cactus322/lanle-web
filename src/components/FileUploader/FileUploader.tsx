import { Box, Input, InputLabel } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { blueGrey } from '@mui/material/colors'

export const FileUploader = () => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.files)
	}
	
	return (
		<Box
			component="form"
			autoComplete="true"
			sx={{ display: 'flex', justifyContent: 'center' }}
		>
			<InputLabel
				sx={{
					width: 125,
					height: 150,
					backgroundColor: blueGrey['A400'],
					'&:hover': {
						backgroundColor: blueGrey['A700'],
					},
					borderRadius: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Input
					type="file"
					sx={{ display: 'none' }}
					onChange={handleChange}
				/>
				<AddIcon color="action" sx={{ fontSize: 40 }} />
			</InputLabel>
		</Box>
	)
}
