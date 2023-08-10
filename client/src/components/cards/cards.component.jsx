import Card from "../card/card.component"

import styles from "./cards.module.css";

// function Cards({countriesPage}) {
  
 
//   return (
//     <div className="cards-list">
      
//       {countriesPage&& countriesPage.map(country => <Card country={country } />
//      )}
//     </div>
//   );
// }
function Cards({ allCountries }) {
  
  return (
    <div className={styles.cardList}>
      <div >
        {allCountries &&
          allCountries.map((country) => <Card country={country} />)}
      </div>
    </div>
  );
}
export default Cards;

//cards: contenedor de muchas tarjetitas - por eso hay otro componente que es card que representa 1 sola
//vamos a querer renderizar card
//  const allCountriesFilter = () => {
//    return allCountries.slice(0, 10);
//  };
