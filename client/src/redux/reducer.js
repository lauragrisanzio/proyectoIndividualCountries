// //tambien tiene el estado(lo tiene como tal) pero pertenece al store -
// //aca se declara el estado

import { GET_COUNTRIES, GET_BY_NAME, GET_BY_DETAIL } from "./actions";

const initialState = {
    allUsers: [],
    allUsersCopy:[],  //copiua del estado original por si acaso
    allCountries: [],
  allActivities: [],
    detail: []
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
      default:
        return state;
    }
};
 
export default rootReducer; 