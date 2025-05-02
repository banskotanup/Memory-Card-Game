import { useEffect, useState } from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import { getPokemonData } from "./utils/fetchPokemon";
import DifficultySelector from "./components/DifficultySelector";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [difficulty, setDifficulty] = useState(12);
  const [cards, setCards] = useState(shuffle([]));
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [status, setStatus] = useState("play");

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  useEffect(() => {
    async function loadCards() {
      setLoading(true);
      const data = await getPokemonData(difficulty);
      setClicked([]);
      setScore(0);
      setCards(shuffle(data));
      setLoading(false);
      setStatus("play");
    }

    loadCards();
    AOS.refresh();
  }, [difficulty]);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function handleClick(id) {
    if (clicked.includes(id)) {
      setGameOver(true);
      setStatus("lose");
      const score = document.querySelector(".score");
      score.classList.add("no-display-score");
    }
    const newClicked = [...clicked, id];
    const newScore = score + 1;
    setClicked(newClicked);
    setScore(newScore);
    setBestScore(Math.max(newScore, bestScore));

    if (newClicked.length === difficulty) {
      setGameOver(true);
      setStatus("win");
      document.querySelector(".score")?.classList.add("no-display-score");
    } else {
      setCards(shuffle([...cards]));
    }
  }

  async function handlePlayAgain() {
    setStatus("playAgain");
    await sendMessage();
    setStatus("play");
    setGameOver(false);
    setScore(0);
    setClicked([]);
    const score = document.querySelector(".score");
    score.classList.remove("no-display-score");
  }

  function sendMessage() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  return (
    <>
      <div className="App">
        <Header score={score} bestScore={bestScore} />
        <main>
          {gameOver ? (
            status === "playAgain" ? (
              <div className="spinnerWrapper">
                <p>Loading game...</p>
                <div className="spinner"></div>
              </div>
            ) : status === "win" ? (
              <div className="game-over">
                <p className="over" data-aos="flip-left" data-aos-delay="100">You won!!!</p>
                <p className="final-score" data-aos="fade" data-aos-delay="300">Score: {score}</p>
                <button onClick={handlePlayAgain} data-aos="fade-up" data-aos-delay="400">Play again</button>
              </div>
            ) : (
              <div className="game-over">
                <p className="over" data-aos="flip-left" data-aos-delay="100">Game Over</p>
                <p className="final-score" data-aos="fade" data-aos-delay="300">Score: {score}</p>
                <button onClick={handlePlayAgain} data-aos="fade-up" data-aos-delay="400">Play again</button>
              </div>
            )
          ) : (
            <div>
              <DifficultySelector setDifficulty={setDifficulty} />
              <div className="level-wrapper">
                <p className="level">
                  {difficulty === 6
                    ? "Level: EASY"
                    : difficulty === 12
                    ? "Level: MEDIUM"
                    : "Level: HARD"}
                </p>
              </div>
              {loading ? (
                <div className="spinnerWrapper">
                  <p>Loading pokemon</p>
                  <div className="spinner"></div>
                </div>
              ) : (
                <GameBoard cards={cards} handleClick={handleClick} />
              )}
            </div>
          )}
        </main>
        <footer>
          <p>Anup Banskota | {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}

export default App;
