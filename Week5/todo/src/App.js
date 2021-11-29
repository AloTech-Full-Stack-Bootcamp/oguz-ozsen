import Section from "./Components/Section"
import Footer from "./Components/Footer"
import './App.css';
import { useState } from "react";

function App() {

  const [list,setList] = useState([]);


  return (
    <div>
      <Section setList={setList} list={list} />
      <Footer/>
    </div>
  );
}

export default App;
