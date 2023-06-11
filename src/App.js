import React from "react";
import './App.css';
import Header from "./components/Header";
import Maincontent from "./components/Maincontent";
import Mainsecond from "./components/Mainsecond";
import MainThird from "./components/MainThird";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div >
      <Navbar/>
      <Header/>
      <Maincontent/>
      <Mainsecond/>
      <MainThird/>
      <Footer/>
    </div>
  );
}

export default App;
