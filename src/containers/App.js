import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../utils/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index)=>{
          return route.component ? 
            <Route key={index} path={route.path} element={<route.component/>}/>
            : (null)
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
