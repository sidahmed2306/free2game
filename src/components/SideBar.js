import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div
            className="side-bar"
            style={toggle ? { width: "fit-content" } : null}
        >
            <button
                onClick={() => {
                    setToggle(!toggle);
                    console.log(toggle);
                }}
            >
                <img src="./images/Burger.svg" alt="" />
            </button>

            <div>
                <Link to="/">
                    <img src="./images/home1.svg" alt="" />
                    {toggle ? <p>Home</p> : null}
                </Link>
                <Link to="/games">
                    <img src="./images/AllGames.svg" alt="" />
                    {toggle ? <p>All Games</p> : null}
                </Link>
                <Link to="/recentgames">
                    <img src="./images/RecentlyAdded.svg" alt="" />
                    {toggle ? <p>Recently Added</p> : null}
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
