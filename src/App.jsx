import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Storedata from "./store/Storedata.jsx";
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form.jsx";
import Showblog from "./components/Showblog.jsx";
import { useState } from "react";
function App() {
  const [nameelement,setnameelement] = useState("Createblog");
  return (
    
    <Storedata>
     
       <Sidebar elementname ={nameelement} setname ={setnameelement} ></Sidebar>
       <div className="child">

        
        <Navbar></Navbar>
        {nameelement ==="Home" ?<Showblog></Showblog>:<Form></Form>}
        
        

       </div>

   
   



    </Storedata>
  );
}

export default App;
