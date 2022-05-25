import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';

export default function Header(props) {
  return (
    <AppBar color={"transparent"} elevation={0} position="static" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Box sx={{marginLeft: 'auto', colors: 'text.secondary'}} >
          <AutoAwesomeTwoToneIcon color="white" style={{ fontSize: '300%' }}/>
        </Box>
      </Toolbar>
    </AppBar>)
}