import CardNeu from "./compenents/CardNeu";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import NavbarNeu from "./compenents/NavbarNeu";
import "./app.css"


function App() {
  
  return (
    <div>
    <NavbarNeu/>
     <CardNeu dat= {data}/>
    </div>
  );
}

export default App;
