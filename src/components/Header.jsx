export default function Header({ score, bestScore }) {
    return (
        <header>
            <div className="header">
                <img src="./images/logo.png" alt="" />
                <h1>Memory card game</h1>
            </div>
            <hr />
            <p className="score">Score: {score} | Best score: {bestScore}</p>
        </header>
    );
}