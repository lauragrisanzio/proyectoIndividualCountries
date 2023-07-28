import Card from "../card/card.component"

import "./cards.styles.css";

function Cards() {
  return (
    <div className="Cards">
      <Card />
      <Card />
    </div>
  );
}
export default Cards;

//cards: contenedor de muchas tarjetitas - por eso hay otro componente que es card que representa 1 sola
//vamos a querer renderizar card