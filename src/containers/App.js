// import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Common/Header";
import theme from "../style/theme";
import routes from "../utils/routes";
import NotFound from "../views/Error";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header transparent={(true)}/>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return route.component ?
              <Route key={index} path={route.path} element={<route.component />} />
              : (<NotFound errorCode="NOT_FOUND"/>)
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
