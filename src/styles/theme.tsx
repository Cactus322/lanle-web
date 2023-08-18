import { createTheme, outlinedInputClasses } from '@mui/material'
import { blue } from '@mui/material/colors'

const theme = createTheme({
    palette: {
        primary: {
            main: '#5893df',
        },
    },
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: blue[500],
                    },
                    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: blue[200]
                    },
                },
			},
		},
	},
})

export default theme
