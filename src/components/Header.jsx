export default function Header({ score, bestScore }) {
    return (
        <header>
            <div className="header">
                <img src="./images/logo.png" alt="" data-aos="fade-down" data-aos-easing="ease" data-aos-delay="400"/>
                <h1 data-aos="zoom-in-up">Memory card game</h1>
            </div>
            <hr />
            <p className="score" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="500">Score: {score} | Best score: {bestScore}</p>
        </header>
    );
}