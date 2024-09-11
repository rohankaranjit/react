


import React from 'react'
import { ACTIONS } from './App'

export default function OperationButton({dispatch, digit}) {
return (
  <button onClick={()=> dispatch({type:ACTIONS.CHOOSE_OPERATION, payload : {digit}})}>{digit}</button>
)
}

