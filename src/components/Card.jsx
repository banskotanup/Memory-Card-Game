import "./Card.css";

export default function Card({ card, handleClick, flipped }) {
  return (
    <div className="card-container" onClick={() => handleClick(card.id)}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div
          className="card-front"
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={card.img} alt={card.name} />
          <p>{card.name}</p>
        </div>
      </div>
    </div>
  );
}
