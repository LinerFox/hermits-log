import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import React from "react";
import Summary from "./components/Summary/Summary";
function App() {
  return (
    <>
      <div className='container'>
        <Navigation />
        <Home />
        <Summary />
      </div>
    </>
  );
}

export default App;
