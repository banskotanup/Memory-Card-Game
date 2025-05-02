export default function DifficultySelector({ setDifficulty }) {
    return (
        <div className="difficulty-selector">
            <label data-aos="fade-in" data-aos-easing="ease-in" ata-aos-delay="500">Select difficulty:</label>
            <div>
            <button onClick={()=> setDifficulty(6)} className="easy" data-aos="zoom-out-down" data-aos-delay="500">Easy</button>
            <button onClick={()=> setDifficulty(12)} className="medium" data-aos="zoom-out-up" data-aos-delay="500">Medium</button>
            <button onClick={()=> setDifficulty(18)} className="hard" data-aos="zoom-out-left" data-aos-delay="500">Hard</button>
            </div>
        </div>
    );
}