import { createStore } from "redux";

const INITIAL_STATE = {
  corriendo: false,
  segundos: 0,
  nombre: "Hornear la Pizza"
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === "AUMENTAR") {
    return { ...state, segundos: state.segundos + 1 };
  }
  if (action.type === "DETENER") {
    return { ...state, corriendo: false };
  }
  if (action.type === "INICIAR") {
    return { ...state, corriendo: true };
  }
  return state;
};

export default createStore(reducer);
