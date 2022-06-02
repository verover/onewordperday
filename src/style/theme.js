import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#4f759b',
        },
        secondary: {
            main: '#92c9b1',
        },
        background: {
            gradient: 'linear-gradient(45deg, #4f759b 30%, #92c9b1 90%)',
            main: '#4f759b'
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