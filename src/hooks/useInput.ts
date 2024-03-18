import React, { ChangeEvent, FocusEvent, useReducer } from "react";

type ActionType = {
  type: "user_input" | "input_focus";

  payload?: string;
};

const initialState = { value: "", isValid: false, hasfocus: false };

const inputReducer = (
  state: typeof initialState,
  action: ActionType
): typeof initialState => {
  switch (action.type) {
    case "user_input":
      if (action.payload !== undefined) {
        return { value: action.payload, isValid: true, hasfocus: true };
      }

      break;
  }
  throw Error("Unknown action: " + action.type);
};

const useInput = () => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initialState);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchInput({ type: "user_input", payload: e.target.value });
    // console.log(e.target.value);
  };

  // //   const inputFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
  // //     dispatchInput({ type: "input_focus" });
  //   };

  return {
    isValid: inputState.isValid,
    value: inputState.value,
    hasFocus: inputState.hasfocus,
    inputChangeHandler,
  };
};

export default useInput;
