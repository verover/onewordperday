import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#5F7161',
        },
        secondary: {
            main: '#78909c',
        },
        background: {
            main: '#D5D8B5',
        },
        white: {
            main: grey['A200'],
        },
        grey: {
            main: grey[800]
        }
    },
})

export default theme;