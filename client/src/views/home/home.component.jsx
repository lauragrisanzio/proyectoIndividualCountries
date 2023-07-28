import NavBar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

import "./home.styles.css";

function Home () {
  return (
    <div className="home">
      <NavBar />
      <p>
              Esta es la HOME page: tiene que tener:
              *SearchBar: un input de búsqueda
              para encontrar países por nombre.
              *Sector en el que se vea un listado de
        cards con los países. Al iniciar deberá cargar los primeros resultados
        obtenidos desde la ruta GET /countries y deberá mostrar su: Imagen de la
              bandera. Nombre. Continente.
              *Cuando se le hace click a una Card deberá
              redirigir al detalle de ese país específico.
              *Botones/Opciones para
        filtrar por continente y por tipo de actividad turística.
        *Botones/Opciones para ordenar tanto ascendentemente como
        descendentemente los países por orden alfabético y por cantidad de
              población.
              *Paginado: el listado de países se hará por partes. Tu SPA
        debe contar con un paginado que muestre un total de 10 países por
        página.
      </p>
      
      <Cards /> 
    </div>
  );
}

export default Home;

//Cards: componente que se renderiza dentro de otro