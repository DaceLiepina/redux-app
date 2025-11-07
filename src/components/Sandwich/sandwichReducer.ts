import type { Action } from "./types/Action";
import type SandwichState from "./types/SandwichState";

// Тип этого начального состояния указан как CounterState. kas paradisies pie pirmas uzzimesanas
const initialState: SandwichState = {
  value: '',
  
};


export default function sandwichReducer(
  //divi argumenti - state un action
  state: SandwichState = initialState,
  action: Action
): SandwichState {
  
  switch (action.type) {
    
    case "sandwich/addBread":
      return {
        ...state, value: `${state.value} Bread 🍞`
      };

  
 case "sandwich/addCheese":
      return { ...state, value: `${state.value} Cheese 🧀` };

    case "sandwich/addBacon":
      return { ...state, value: `${state.value} Bacon 🥓` };

    case "sandwich/addSalad":
      return { ...state, value: `${state.value} Salad 🥗` };

    case "sandwich/reset":
      return { ...state, value: " " };

    default:
      return state;
  }
}