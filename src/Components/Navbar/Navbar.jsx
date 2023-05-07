import React, { useState } from "react";
import "./Navbar.css"

function Navbar() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu display");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked)
  }


  return (
    <div style={{width: "100%", height: "100vh" }}>
      <nav onClick={updateMenu} >
        <div className="burger-menu" ></div>
        <div className={burgerClass} ></div>
        <div className={burgerClass} ></div>
        <div className={burgerClass} ></div>
      </nav>

      <div className={menuClass}></div>
   
    </div>
  )
}

export default Navbar
