import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import AppContext from "../components/AppContext";
import "./Home.css";
import setBackground from "../components/setBackground";

const Home = () => {
    const gameName = useContext(AppContext);
    const [recentGames, setRecentGames] = useState([]);
    const [topPc, setTopPc] = useState([]);
    const [topBrowser, setTopBrowser] = useState([]);
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [loading3, setLoading3] = useState(true);
    const [pcFirstBackground, setPcFirstBackground] = useState("");

    useEffect(() => {
        fetch("https://www.freetogame.com/api/games?sort-by=release-date")
            .then((res) => res.json())
            .then((json) => setRecentGames(json));
        setLoading1(false);
    }, []);

    useEffect(() => {
        fetch(
            "https://www.freetogame.com/api/games?platform=pc&sort-by=popularity"
        )
            .then((res) => res.json())
            .then((json) => setTopPc(json));
        setLoading2(false);
    }, []);
    useEffect(() => {
        fetch(
            "https://www.freetogame.com/api/games?platform=browser&sort-by=popularity"
        )
            .then((res) => res.json())
            .then((json) => setTopBrowser(json));
        setLoading3(false);
    }, []);

    if (loading1 || loading2 || loading3) {
        return <p>is loading...</p>;
    }

    if (topPc.length > 0) {
        fetch(`https://www.freetogame.com/api/game?id=${topPc[0].id}`)
            .then((res) => res.json())
            .then((json) => setPcFirstBackground(json.screenshots[0].image));
    }

    if (topPc.length > 0) {
        setBackground({
            image: `url(${pcFirstBackground})`,
        });
    }

    return (
        <main className="home">
            <div
                className="image"
                style={{
                    backgroundImage: `url(./images/LeagueOfLegends.png)`,
                }}
            >
                <h2>Find & Track the best Free-To-Play Games!</h2>
            </div>
            <div>
                <h3>Recently Added</h3>
                <div className="recent-grid">
                    {recentGames.slice(0, 4).map((e) => (
                        <GameCard key={e.id} {...e} />
                    ))}
                </div>
                <Link to="/recentgames">Show More</Link>
            </div>
            <div>
                <h3>Top 4 Games for PC</h3>
                <div className="toppc-grid">
                    {topPc.slice(0, 4).map((e, index) => (
                        <GameCard igitt={index + 1} key={e.id} {...e} />
                    ))}
                </div>
                <Link to="/games">Show More</Link>
            </div>
            <div>
                <h3>Top 4 Games for Browser</h3>
                <div className="recent-grid hide-p">
                    {topBrowser.slice(0, 4).map((e) => (
                        <GameCard key={e.id} {...e} />
                    ))}
                </div>
                <Link to="/games">Show More</Link>
            </div>
        </main>
    );
};

export default Home;
