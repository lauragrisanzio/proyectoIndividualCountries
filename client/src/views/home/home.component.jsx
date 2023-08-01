//hook para controlar el ciclo de vida: useEffect
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {getByName, getCountries}  from "../../redux/actions";

import NavBar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

import "./home.styles.css";

function Home() {
  const dispatch = useDispatch(); //se le envia una action al estado

  //componente quiero que estes suscripto a cualquier cambio que ocurra en el estado countries
  const allCountries = useSelector((state) => state.allCountries); //se indica al componente de que estado depende, a que estado quiero estar suscripto
  const [searchString, setSearchString] = useState("");

    //funcion que setea el searchstring(value) del input
    const handleChange = (e) => {
      e.preventDefault();  //para que la pagina no se actualice
      setSearchString(e.target.value.toLowerCase())
  }

  //*filtro sobre el estado:
  //   //funcionalidades de barra de busqueda:
  //   const [filtered, setFiltered] = useState(allCountries);  //cuando se cargue el componente quiero que se carguen todos los countries

  //   const handleSubmit = (e) => {
  //      e.preventDefault();
  //     const filtered = allCountries.filter((country) => (country.name.includes(searchString)))
  //     setFiltered(filtered);
  // }

  //*FILTRO CON LA DB:
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(searchString))    
}


  useEffect(() => {
    dispatch(getCountries()); //1° parametro lo que queremos ejecutar al momento de hacer el dispatch, cuando se monta
    // return(()=>{}) //=> en esta callback se ejecuta una fx al momento de desmontar
  }, [dispatch]); //2° parametro una array de dependecia

  return (
    <div className="home">
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <p>
        Esta es la HOME page: tiene que tener: *SearchBar: un input de búsqueda
        para encontrar países por nombre. *Sector en el que se vea un listado de
        cards con los países. Al iniciar deberá cargar los primeros resultados
        obtenidos desde la ruta GET /countries y deberá mostrar su: Imagen de la
        bandera. Nombre. Continente. *Cuando se le hace click a una Card deberá
        redirigir al detalle de ese país específico. *Botones/Opciones para
        filtrar por continente y por tipo de actividad turística.
        *Botones/Opciones para ordenar tanto ascendentemente como
        descendentemente los países por orden alfabético y por cantidad de
        población. *Paginado: el listado de países se hará por partes. Tu SPA
        debe contar con un paginado que muestre un total de 10 países por
        página.
      </p>

      <Cards allCountries={allCountries} />
    </div>
  );
};

//le pasa como props el nombre no el destructuring - line 46

export default Home;

//Cards: componente que se renderiza dentro de otro