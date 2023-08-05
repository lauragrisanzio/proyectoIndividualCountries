import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_DETAIL = "GET_BY_DETAIL";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_BY_AZ = "ORDER_BY_AZ";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const CREATE_ACTIVITIES = "CREATE_ACTIVITIES"

export const getCountries =  () => {
       return async (dispatch) => {
         const response = await axios.get("http://localhost:3001/countries");
        return dispatch({
            type: "GET_COUNTRIES",
            payload: response.data
            })
    }
};

export const getActivities = () => {
  return async (dispatch) => {
    const response = await axios("http://localhost:3001/activities");
    return dispatch({
      type: "GET_ACTIVITIES",
      payload: response.data
    });
  };
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

export const createActivities = () => {
  return async (dispatch) => {
    const activity = await axios.post("http://localhost:3001/activities")
    return (dispatch)({
      type: "GET_ACTIVITIES",
      payload: activity.data
    })
  }
}


export const filterContinent = (payload) => {
  return {
    type: "FILTER_BY_CONTINENT",
    payload,
  };
};

export const filterActivity = (season) => {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload: season,
  };
};

export const orderByAz = (order) => {
return {
  type: "ORDER_BY_AZ",
  payload: order,
};

};

export const orderByPopulation = (order) => {

  return {
  type: "ORDER_BY_POPULATION",
  payload: order,
  };
};

//se solicita la informacion
//que queremos hacer con el estado
//payload es la data
