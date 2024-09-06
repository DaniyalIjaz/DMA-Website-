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
import ScrollOnTopButton from './Components/ScrollOnTopButton';
import FeaturedProject1 from './Components/FeaturedProject1';
function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
      <ScrollOnTopButton/>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
            <Route index element={<Home/> } />
            <Route path="/about" element={<About/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/downloads" element={<Downloads/>} />
           
            <Route path="/projects" element={<Projects/>} />
            <Route path="/our-clientele" element={<ClientsNavbar/>} />
            <Route path="/architecture" element={<Architecture/>} />
            <Route path="/engineering" element={<Engineering/>} />
            <Route path="/construction" element={<Construction/>} />
            <Route path="*" element={<Error/>} />
            {/* Projects section routes  */}
            <Route path="/projects/featured-project-1" element={<FeaturedProject1/>} />
        </Route>
      </Routes>
    </BrowserRouter>


    </>
  );
}


export default App;
