import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import {Route,Routes} from "react-router-dom";
import HDPred from "./component/ProjectOverview/HDPred";
import UDCon from "./component/ProjectOverview/UDCon";
import InvoiceManagement from "./component/ProjectOverview/InvoiceManagement";
import Education from "./component/Education/Education";
import Skills from "./component/Skills/Skills";
import Experience from "./component/Experience/Experience";
import Achievenments from "./component/Achievenments/Achievenments";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/SouravKr" element ={<Home/>} />
        <Route path="/project" element ={<Project/>} />
        <Route path="/about" element ={<About/>} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path="/hdPrediction" element={<HDPred/>}/>
        <Route path="/UDConsulant" element={<UDCon/>}/>
        <Route path="/invoiceManagement" element={<InvoiceManagement/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/achievenments" element={<Achievenments/>}/>

      </Routes>
    </>
  );
}

export default App;
