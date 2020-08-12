import React from "react";
import './Nav.css';
import Pagination from "./Pagination/Pagination";

const  Nav = (props) => {
  return (
    <nav>
      <h3 className='web-title'>Movies Explorer</h3>
      <form>
        <input type="text" placeholder={"Search Movies ..."}/>
        <input type="submit" value="Search" placeholder={"Search Movies ..."}/>
      </form>
    </nav>
  )
};

export default Nav;
