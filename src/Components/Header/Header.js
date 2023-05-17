import "./Header.css";

import React, { useState } from "react";

import Mobile from "./mobileMenu/Mobile";
import Web from "./WebMenu/Web";

function Header() {
  const [Open, setOpen] = useState(false);
  return (
    <div className='header'>
      <div className='logo'>Hermit's Log</div>
      <div className='menu'>
        <div className='web-menu'>
          <Web />
        </div>
        <div className='mobile-menu'>
          <div onClick={() => setOpen(!Open)}>
            <i className='fas fa-bars menuIcon'></i>
          </div>
          {Open && <Mobile Open={Open} setOpen={setOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
