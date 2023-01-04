import CardNeu from "./compenents/CardNeu";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import NavbarNeu from "./compenents/NavbarNeu";
import "./app.css"
import Header from "./compenents/Header";


function App() {
  
  return (
    <div>
    <NavbarNeu/>
    <Header/>
     <CardNeu data= {data}/>
    </div>
  );
}

export default App;
