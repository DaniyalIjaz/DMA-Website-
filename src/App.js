// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import './App.css';
import MainHeader from './Components/MainHeader';
import Home from './Components/Home';
import About from "./Components/About";
import Error from "./Components/Error";
import Architecture from './Components/Architecture';
import Engineering from './Components/Engineering';
import Construction from './Components/Contruction';
import Team from './Components/Team';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ClientsNavbar from './Components/ClientsNavbar';
import Projects from './Components/Projects';
import Downloads from './Downloads';
import ScrollToTop from './ScrollToTop';
function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
            <Route index element={<Home/> } />
            <Route path="/about" element={<About/>} />
            <Route path="/Team" element={<Team/>} />
            <Route path="/Downloads" element={<Downloads/>} />
           
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/ClientsNavbar" element={<ClientsNavbar/>} />
            <Route path="/Architecture" element={<Architecture/>} />
            <Route path="/Engineering" element={<Engineering/>} />
            <Route path="/Construction" element={<Construction/>} />
            <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>


    </>
  );
}


export default App;
