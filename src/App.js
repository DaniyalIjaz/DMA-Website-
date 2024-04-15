
// import './App.css';
import MainHeader from './Components/MainHeader';
import Home from './Components/Home';
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from './Components/Contact';
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





function App() {
  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
            <Route index element={<Home/> } />
            <Route path="/about" element={<About/>} />
            <Route path="/Team" element={<Team/>} />
            <Route path="/contact" element={<Contact/>} />
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
