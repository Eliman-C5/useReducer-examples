import { TYPES } from '../actions/counterActions'
import { counterInitialState } from '../reducers/counterReducer'
import counterReducer from '../reducers/counterReducer'
import { useReducer } from 'react'

const Counter = () => {

  const [state, dispatch] = useReducer(counterReducer, counterInitialState)
  const {count} = state

  return (
    <div>
        <h2>Counter</h2>
        <div style={{display: 'flex', justifyContent: 'center', gap: '6px'}}>
          <button onClick={() => dispatch({type: TYPES.INCREMENT})}>+</button>
          <button onClick={() => dispatch({type: TYPES.DECREMENT})}>-</button>
          <button onClick={() => dispatch({type: TYPES.RESET})}>reset</button>
        </div>
        <h4 style={{textAlign: 'center'}}>
        {count}
        </h4>
    </div>
  )
}

export default Counter