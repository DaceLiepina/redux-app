import type { Action } from "./types/Action";

import type CounterState from "./types/CounterState";
// Начальное состояние: Создаётся начальное состояние initialState для счётчика.
//saakotneejaa veertiiba centraalajam staavoklim
// initialState имеет свойство value, установленное на 0.


// Тип этого начального состояния указан как CounterState.
const initialState: CounterState = {
  value: 0,
};

// Функция counterReducer: Экспортируется функция counterReducer,
// которая принимает два аргумента: state и action.

export default function counterReducer(
  // state инициализируется значением initialState,
  // но если не передано значение, то будет использовано initialState.
  state: CounterState = initialState,
  action: Action
): CounterState {
  // switch-case конструкция: Внутри функции counterReducer используется оператор switch,
  // чтобы определить, какое действие следует предпринять в зависимости от типа action.type.
  switch (action.type) {
    // case 'counter/plus': Если тип действия равен 'counter/plus',
    // то выполняется сложение значения action.payload к текущему state.value.
    //...spread operators panjem ieprieksejo veertiibu un pie tas pierekjina klaat
    case "counter/plus":
      return {
        ...state,
        value: state.value + action.payload,
      };

    // case 'counter/minus': Если тип действия равен 'counter/minus',
    // то выполняется вычитание значения action.payload из текущего state.value.
    case "counter/minus":
      return {
        ...state,
        value: state.value - action.payload,
      };
    case "counter/reset":
      return {
        ...state,
        value: (state.value = 0),
      };
    // default: Если тип действия не совпадает ни с одним из указанных case,

    // возвращается текущее состояние state без изменений.
    default:
      return state;
  }
}

// action представляет собой действие, которое нужно применить к состоянию.
// Ожидается, что action будет иметь свойство type для определения типа действия и,
// возможно, payload для передачи данных.

// Возвращаемое значение: В зависимости от типа действия,
// функция counterReducer возвращает новое состояние с обновлённым значением value
// или текущее состояние, если тип действия не определён.
