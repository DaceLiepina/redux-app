import { createStore, combineReducers } from "redux";
import { moviesReducer } from "../moviesReducer";
//Используйте combineReducers для создания корневого редьюсера:


// 1️⃣ Apvienojam visus reducerus vienā rootReducer
const rootReducer = combineReducers({
  movies: moviesReducer,
});

// 2️⃣ Izveidojam store
export const store = createStore(rootReducer);

// 3️⃣ Izgūstam tipizētu RootState (no visiem reduceriem)
export type RootState = ReturnType<typeof rootReducer>;
