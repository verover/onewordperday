import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Header(props) {
  return (
    <AppBar color={"transparent"} elevation={0} position="static" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Container>
          <Typography variant="h6" component="div">
            Transparent
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>)
}