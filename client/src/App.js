import Header from "./components/Header";
import Section from "./components/Section";
import Footer  from "./components/footer";
import React from 'react';
// import Navbar from "./components/Navbar";
import Faq from "../src/components/FaqSection";
function App() {
  return (
    <div className=''>
      <Header/>
      {/*  */}
      <Section/>
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;
