import { useEffect, useState, useContext } from "react";
import GameCard from "../components/GameCard.js";
import AppContext from "../components/AppContext";
import "./RecentlyAdded.css";
const RecentlyAdded = () => {
  let fetchUrl = "https://www.freetogame.com/api/games?sort-by=release-date";
  let id;
  const context = useContext(AppContext);
  let gameName = context.nameContext;
  const [recentGames, setRecentGames] = useState([]);
  const fetchData = () => {
    console.log(fetchUrl);
    fetch(`${fetchUrl}`)
      .then((res) => res.json())
      .then((json) => setRecentGames(json));
  };
  if (context.nameContext != "") {
    recentGames.map((e) => {
      if (gameName.toLowerCase() == e.title.toLowerCase()) {
        console.log(e.id);
        id = e.id;
        fetchUrl = `https://www.freetogame.com/api/game?id=${id}`;
        console.log(fetchUrl);
      }
    });
    context.setNameContext("");
    fetchData();
  }
  useEffect(fetchData, []);
  console.log(fetchUrl);
  return (
    <>
      <header>
        <div
          id="img"
          className="image"
          style={{
            backgroundImage: `url(./images/LoL.png)`,
          }}
        >
          <h2>Recently Added</h2>
        </div>
      </header>
      <main>
        <div className="gridd">
          {recentGames.length > 1 ? (
            recentGames.map((elt) => <GameCard key={elt.id} {...elt} />)
          ) : (
            <GameCard
              key={recentGames.id}
              id={recentGames.id}
              title={recentGames.title}
              platform={recentGames.platform}
              genre={recentGames.genre}
              thumbnail={recentGames.thumbnail}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default RecentlyAdded;
