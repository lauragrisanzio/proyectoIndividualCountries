// //tambien tiene el estado(lo tiene como tal) pero pertenece al store -
// //aca se declara el estado

import {
  GET_COUNTRIES, GET_BY_NAME, GET_BY_DETAIL, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY,
  ORDER_BY_AZ, ORDER_BY_POPULATION
} from "./actions";

const initialState = {
    allUsers: [],
    cards:[],  //copiua del estado original por si acaso
    allCountries: [],
  allActivities: [],
  detail: [],
  countries: [],
    activity: "All"
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //de acuerdo a la action type, hace una u otra cosa
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload, //el action payload va a ser todos los paises
      };
    case GET_BY_NAME:
      return {
        ...state,
        allCountries: action.payload, //el action payload va a ser todos los paises
      };
    case GET_BY_DETAIL:
      return {
        ...state,
        detail: action.payload, //el action payload va a ser todos los paises
      };
    
    case FILTER_BY_CONTINENT:
      const filterByContinent = state.allCountries;
      const continentFilter =
        action.payload === "All"
          ? filterByContinent
          : filterByContinent.filter((c) => c.continent === action.payload);
      return {
        ...state,
        // allCountries: filterByContinent,
        countries: filterByContinent,
        allCountries: continentFilter
      };

    case FILTER_BY_ACTIVITY:
      const filterByActivity = state.allCountries;
      const activityFilter =
        action.payload === "All"
          ? filterByActivity
          : filterByActivity.filter((c) =>
            c.activity);
      console.log(activityFilter);
      const activities = activityFilter.filter((ac) => ac.season === action.payload)

      return {
        ...state,
        // allCountries: filterByActivity,
       allCountries: activities,
      };

    case ORDER_BY_AZ:
      const order = [...state.allCountries].sort((a, b) => {
        if (action.payload === "A-Z") {
          return a.name > b.name ? 1 : -1;
        } else {
          return a.name < b.name ? 1 : -1;
        }
      });
      return {
        ...state,
        allCountries: order,
      };

    case ORDER_BY_POPULATION:
      const orderPopulation = [...state.allCountries].sort((a, b) => {
        if (action.payload === "Lower Population") {
          return a.population > b.population ? 1 : -1;
        } else {
          return a.population < b.population ? 1 : -1;
        }
      });
      return {
        ...state,
        allCountries: orderPopulation,
      };

    default:
      return state;
  }
};
 
export default rootReducer; 