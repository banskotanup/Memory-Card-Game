export default function DifficultySelector({ setDifficulty }) {
    return (
        <div className="difficulty-selector">
            <label>Select difficulty:</label>
            <div>
            <button onClick={()=> setDifficulty(6)} className="easy">Easy</button>
            <button onClick={()=> setDifficulty(12)} className="medium">Medium</button>
            <button onClick={()=> setDifficulty(18)} className="hard">Hard</button>
            </div>
        </div>
    );
}