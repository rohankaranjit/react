import DigitButton from "./DigitButton";
import "./index.css";
import OperationButton from "./OperationButton";

import React, { useReducer } from "react";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CLEAR: "clear",
  CHOOSE_OPERATION: " choose-operation",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};
const initialState = {
  currentOperand: "",
  previousOperand: null,
  operation: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      console.log(payload);
      if (payload.digit.trim() == "0" && state.currentOperand.trim() == "0") {
        //not working
        console.log("here")
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      //x
      //y
      //z
      return {
        ...state,
        currentOperand: `${state.currentOperand || "  "}${payload.digit}`,
      };

    case ACTIONS.CLEAR:
      return {};

    default:
      return state;
  }
}

export default function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {operation}{" "}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button>DEL</button>
      <OperationButton digit="÷" operation={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton digit="*" operation={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton digit="+" operation={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton digit="-" operation={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
}
