import Card from "./Card";

export default function GameBoard({ cards, handleClick }) {
    return (
        <div className="gameboard">
            {cards.map((card) => (
                <Card key={card.id} card={card} handleClick={handleClick}/>
            ))}
        </div>
    );
}