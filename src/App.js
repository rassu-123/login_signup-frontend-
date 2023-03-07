
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Type from "./components/Type";
import Forget_Password from "./components/Forget_Password"
import {Routes, Route} from "react-router-dom"
function App() {
  return (  
  <>
  <Routes>
    <Route path ='/' element={<Login/>}/>
    <Route path='/Type' element={<Type/>}/>
    <Route path ='/Register' element ={<Register/>}/>
    <Route path='/Forget_Password' element ={<Forget_Password/>}/>
  </Routes>
  </>
  );
}

export default App;
