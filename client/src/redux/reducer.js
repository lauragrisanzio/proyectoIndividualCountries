// //tambien tiene el estado(lo tiene como tal) pero pertenece al store -
// //aca se declara el estado

// import { GET_COUNTRIES } from "./actions";

// const initialState = {
//   users: [],
//     countries: [],
//   activities: []
// };


// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         //de acuerdo a la action type, hace una u otra cosa
//         case GET_COUNTRIES:
//             return {
//                 ...state,
//                 countries: action.payload //el action payload va a ser todos los paises
//             }
//         default:
//             return state
//     }
// };
 
// export default rootReducer; 