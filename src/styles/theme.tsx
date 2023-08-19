import { createTheme, outlinedInputClasses } from '@mui/material'
import { blue } from '@mui/material/colors'

const theme = createTheme({
    palette: {
        primary: {
            main: '#5893df',
        },
        background: {
            default: '#1d1d2f',
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
