import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_DETAIL = "GET_BY_DETAIL";

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
    const response = await axios(`http://localhost:3001/countries/?name=${name}`);
    return dispatch({
      type: "GET_BY_NAME",
      payload: response.data,
    });
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


//se solicita la informacion
//que queremos hacer con el estado
//payload es la data
