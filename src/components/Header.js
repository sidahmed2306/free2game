import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import AppContext from "./AppContext";
const Header = () => {
  const value = useContext(AppContext);
  const readSearch = () => {
    value.setNameContext(document.querySelector(".input-search").value);
    document.querySelector(".input-search").value = "";
  };
  // enter button bei searchbar
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      value.setNameContext(document.querySelector(".input-search").value);
      document.querySelector(".input-search").value = "";
    }
  };
  return (
    <>
      <div className="header" action="">
        <Link className="logo-link" to="/">
          <img id="logo" className="logo" src="./images/Logo1.svg" alt="" />
        </Link>

        <div className="recht">
          <button onClick={readSearch} className="button-search">
            <img className="search-logo" src="./images/Search.svg" alt="" />
          </button>
          <input
            onKeyDown={handleKeyDown}
            type="text"
            className="input-search"
            placeholder="Type to Search..."
          />
        </div>
      </div>
    </>
  );
};

export default Header;
