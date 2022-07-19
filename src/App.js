import { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ArtistDetails from "./Components/ArtistDetails";
import Artists from "./Components/Artists";
import Error from "./Components/Error";
import Home from "./Components/Home";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/home"} element={<Home/>}/>
                        <Route path={"/artists"} element={<Artists/>}/>
                        <Route path={"/artists/:id"} element={<ArtistDetails/>}/>
                        <Route path={"*"} element={<Error/>}/>
                        
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App