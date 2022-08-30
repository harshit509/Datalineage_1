import Navbar from "./components/header/Navbar";
import {Routes,Route} from "react-router-dom";
import AppMaster from "./components/AppMaster";
import Integrations from "./components/Integrations";
import DataFlow from "./components/DataFlow";
import Reports from "./components/Reports";
import Contact from "./components/Contact";
import Help from "./components/Help";
function App() {
  return (
    <>
  
  {/* <hr style={{color:"black",height:"1rem",backgroundColor:"lightblue",
  marginLeft:"2rem",
}} /> */}

<header
        style={{
          //   marginLeft: "2rem",

          backgroundColor: "lightblue",
          width: "100%",
          height: "5rem",
          padding: "1rem",
          marginTop: ".6rem",
        }}
      >
        <h3
          style={{
            color: "white",
            fontWeight: "700",
            marginLeft: "11rem",
            fontSize: "3rem",
            marginTop: "0rem",
            display: "grid",
            alignItems: "center",
          }}
        >
          Data lineage Solution
        </h3>
      </header>
    <Routes>
      
    <Route path="/" element={<Navbar/>}/>
    <Route path="/app-master" element={<AppMaster/>}/>
    <Route path="/integrations" element={<Integrations/>}/>
    <Route path="/data-flow" element={<DataFlow/>}/>
    <Route path="/reports" element={<Reports/>}/>
    <Route path="/contacts" element={<Contact/>}/>
    <Route path="/help" element={<Help/>}/>

    </Routes>
      
    </>
  );
}

export default App;
