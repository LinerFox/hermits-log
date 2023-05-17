import "./Home.css";

import Footer from "./../Footer/Footer";
import Header from "./../Header/Header";
import Main from "./../Main/Main";
import React from "react";

function Home() {
  return (
    <div className='home'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
