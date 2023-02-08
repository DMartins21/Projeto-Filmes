import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Index";
import Filme from "./Pages/Filme/Index";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/filme/:id" element={<Filme/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp