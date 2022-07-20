//Se escribe con minuscula porque no es un componente.
// 2.- Se importa los TYPES dentro de llaves porque no se importa por default
import { TYPES } from "../actions/changingMenuActions";

// 3.- Se crea el estado inicial, el cual tambien se exportara ya que se le pasara como parametro al useReducer
const changingMenuInitialState = {
    close: false,
    texto_1: false,
    texto_2: false,
    text0_3: false,
}

//4.- La funcion reductora siempre recibe estos dos parametros. El state inicial y el action
const changingMenuReducer = (state, action) => {
    switch (action.type) {
        //El state siempre va a representar el estado anterior, no el estado inicial
        case TYPES.CLOSE:
            return {
                close: true, texto_1: false, texto_2: false, texto_3: false,
            }

        case TYPES.TEXTO_1:
            return {
                close: false, texto_1: true, texto_2: false, texto_3: false,
            }

        case TYPES.TEXTO_2:
            return {
                close: false, texto_1: false, texto_2: true, texto_3: false,
            }
        
        case TYPES.TEXTO_3:
            return {
                close: false, texto_1: false, texto_2: false, texto_3: true,
            }

        default:
            return state
    }
}

//5.- Se exportan el estado inicial (Entre llaves) y la funcion reductora (por defecto)
export {changingMenuInitialState}
export default changingMenuReducer