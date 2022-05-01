import React from "react";
import "./App.css"
import Navbar from "./Navbar"

const Home = () => {
    return (
        <div className="homeContainer">
            <img className="logo" src="forge_logo.png" alt="logo" />
            <img className='homeImage' src='homeimage_with_logo.jpg' alt="forge-home" />
            <button className="homeButtonLeft">All Books</button>
            <button className="homeButtonRight">Build Book</button>
        </div>
    )
}

export default Home