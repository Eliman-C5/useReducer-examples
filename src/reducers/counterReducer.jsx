import React from 'react'
import { TYPES } from '../actions/counterActions'

const counterInitialState = {
    count: 0
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
        return {count: state.count + 1}

    case TYPES.DECREMENT:
        return {count: state.count - 1}

    case TYPES.RESET:
        return {count: 0}
  
    default:
        return state
  }
}

export {counterInitialState}
export default counterReducer