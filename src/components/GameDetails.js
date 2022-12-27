import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import "./GameDetails.css";

const GameDetails = () => {
    const { id } = useParams();
    const [gameDetail, setGameDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/game?id=${id}`)
            .then((res) => res.json())
            .then(
                (json) => setGameDetail(json)
                // setParagraph(json.description.split("."))
            );
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div>
                <p>is loading...</p>
            </div>
        );
    }

    return (
        <main className="details">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${
                        gameDetail.screenshots
                            ? gameDetail.screenshots[0].image
                            : null
                    })`,
                }}
            ></div>

            <h2>{gameDetail.title}</h2>
            <div className="row-wrapper">
                <div>
                    <img
                        className="thumbnail"
                        src={gameDetail.thumbnail}
                        alt="thumbnail of the game"
                    />
                    <h3>Platform: {gameDetail.platform}</h3>
                    <p className="red-border">{gameDetail.genre}</p>
                    <a href={gameDetail.game_url} target="_blank">
                        Play Now
                    </a>
                </div>
                <div>
                    <h3>About</h3>
                    <p>{gameDetail.description}</p>
                </div>
            </div>
            <div className="row-wrapper">
                <div className="add-info">
                    <img
                        src={
                            gameDetail.screenshots
                                ? gameDetail.screenshots[1].image
                                : null
                        }
                    />
                    <h3>Additional Information</h3>
                    <p>
                        Please note this free-to-play game may or may not offer
                        optional in-game purchases.
                    </p>
                    <div>
                        <h5>Developer</h5>
                        <p>{gameDetail.developer}</p>
                    </div>
                    <div>
                        <h5>Publisher</h5>
                        <p>{gameDetail.publisher}</p>
                    </div>
                    <div>
                        <h5>Release Date</h5>
                        <p>{gameDetail.release_date}</p>
                    </div>
                </div>
                {gameDetail.minimum_system_requirements ? (
                    <div>
                        <img
                            src={
                                gameDetail.screenshots
                                    ? gameDetail.screenshots[2].image
                                    : null
                            }
                        />
                        <h3>Minimum System Requirements</h3>
                        <div className="min-req">
                            <div>
                                <div>
                                    <h5>OS</h5>
                                    <p>
                                        {
                                            gameDetail
                                                .minimum_system_requirements.os
                                        }
                                    </p>
                                </div>
                                <div>
                                    <h5>Memory</h5>
                                    <p>
                                        {
                                            gameDetail
                                                .minimum_system_requirements
                                                .memory
                                        }
                                    </p>
                                </div>
                                <div>
                                    <h5>Storage</h5>
                                    <p>
                                        {
                                            gameDetail
                                                .minimum_system_requirements
                                                .storage
                                        }
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h5>Processor</h5>
                                    <p>
                                        {
                                            gameDetail
                                                .minimum_system_requirements
                                                .processor
                                        }
                                    </p>
                                </div>
                                <div>
                                    <h5>Graphics</h5>
                                    <p>
                                        {
                                            gameDetail
                                                .minimum_system_requirements
                                                .graphics
                                        }
                                    </p>
                                </div>
                                <div>
                                    <h5>Additional Notes</h5>
                                    <p>
                                        Specifications may change during
                                        development
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </main>
    );
};

export default GameDetails;
