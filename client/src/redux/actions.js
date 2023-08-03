import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_DETAIL = "GET_BY_DETAIL";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";

export const getCountries =  () => {
       return async (dispatch) => {
         const response = await axios.get("http://localhost:3001/countries");
        return dispatch({
            type: "GET_COUNTRIES",
            payload: response.data
            
        })

    }
};

export const getByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios(`http://localhost:3001/countries/?name=${name}`);
    return dispatch({
      type: "GET_BY_NAME",
      payload: response.data,
    });
    } catch (error) {
      alert("No hay paises con ese nombre, intente nuevamente")
    }
    
  };
};

export const getByDetail = (id) => {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/countries/${id}`);
    return dispatch({
      type: "GET_BY_DETAIL",
      payload: response.data
      
    });
  };
};

export const filterContinent = (continent) => {
  return {
    type: "FILTER_BY_CONTINENT",
    payload: continent ,
  };
};

//se solicita la informacion
//que queremos hacer con el estado
//payload es la data
