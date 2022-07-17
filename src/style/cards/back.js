import { createTheme } from "@mui/material"
import { blue } from "@mui/material/colors"

const Back = createTheme({
  typography: {
    fontFamily: ['Bungee', 'Roboto', 'cursive'].join(','),
    fontSize: 82,
    flexGrow: 1,
  },
  svg: {
    boxShadow: 3,
  }
})

export default Back