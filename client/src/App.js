import Header from "./components/Header";
import Section from "./components/Section";
import Footer  from "./components/footer";
import Video from "./components/videosection";
import React from 'react';
import Faq from "../src/components/FaqSection";
function App() {
  return (
    <div className=''>
      <Header/>
      
      <Section/>
      {/* <Video /> */}
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;
