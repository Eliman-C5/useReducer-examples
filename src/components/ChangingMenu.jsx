//6.- Se invocan los TYPES (ACTIONS), el estado inicial y la funcion reductora (REDUCERS)
import { TYPES } from '../actions/changingMenuActions'
import { changingMenuInitialState } from '../reducers/changingMenuReducer'
import changingMenuReducer from '../reducers/changingMenuReducer'
import { useReducer } from 'react'

const ChangingMenu = () => {

  //7.- Se pasa la funcion reductora y el estado inicial como parametros de el useReducer
  const [state, dispatch] = useReducer(changingMenuReducer, changingMenuInitialState)
  const {texto_1, texto_2, texto_3} = state

  //8.- A partir de este punto se va mostrando el codigo dependiendo de las diferentes acciones que haga el usuario
  //Ya que dependiendo de una accion se dispara un dispatch
  // Y de esta forma podemos multiples valores o estados que son dependientes de un valor anterior
  return (
    <div>
      <h2>ChangingMenu</h2>
      <div style={{display: 'flex', justifyContent: 'center', gap: '6px'}}>
        <button onClick={() => dispatch({type: TYPES.TEXTO_1})}>Texto 1</button>
        <button onClick={() => dispatch({type: TYPES.TEXTO_2})}>Texto 2</button>
        <button onClick={() => dispatch({type: TYPES.TEXTO_3})}>Texto 3</button>
      </div>
      {
          texto_1 &&
          <div className='changingMenu-text'>
            <button onClick={() => dispatch({type: TYPES.CLOSE})}>X</button>
            <div>
            Texto 1
            </div>
          </div>
      }

      {
          texto_2 &&
          <div className='changingMenu-text'>
            <button onClick={() => dispatch({type: TYPES.CLOSE})}>X</button>
            <div>
            Texto 2
            </div>
          </div>
      }  

      {
          texto_3 &&
          <div className='changingMenu-text'>
            <button onClick={() => dispatch({type: TYPES.CLOSE})}>X</button>
            <div>
            Texto 3
            </div>
          </div>
      }   
    </div>
  )
}

export default ChangingMenu