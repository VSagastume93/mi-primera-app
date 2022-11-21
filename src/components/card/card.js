import './card.css'

function Card() {
  return (
    <div className="card">
      <div className="imagen-pokemon">
        <img src="img/Caterpie.svg" alt="" />
      </div>
      <div className="nombre">Nombre pókemon</div>
    </div>
  );
}

export default Card;
