import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import AppContext from "./components/AppContext";
import GameDetails from "./components/GameDetails";
import AllGames from "./pages/AllGames";
import Home from "./pages/Home";
import RecentlyAdded from "./pages/RecentlyAdded";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  const [nameContext, setNameContext] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <AppContext.Provider value={{ nameContext, setNameContext }}>
          <SideBar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/games" element={<AllGames />}></Route>
            <Route path="/recentgames" element={<RecentlyAdded />}></Route>
            <Route path="/games/:id" element={<GameDetails />}></Route>
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
