import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Index";
import Filme from "./Pages/Filme/Index";
import Header from "./Components/Header/Index";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/filme/:id" element={<Filme/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp