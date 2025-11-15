import type { Movie } from "./types/Movie";
import type { Action } from "./types/Action";
import { uid } from "uid"; //генератор уникальных ID. uid() создаёт короткие строки вроде "a3f9k2n" .


// Button darbiibas te nosakas
//Определите начальное состояние — массив фильмов, содержащий хотя бы один фильм (для примера).
const initialState: Movie[] = [
  {
    id: uid(),
    title: "Titanic",
    genre: "Drama",
    country: "USA",
    releaseDate: "1997-01-01",
  },
];

export function moviesReducer(state = initialState, action: Action): Movie[] {
  
  //switch определяет, какое действие выполняется.
  switch (action.type) {
    case "movies/add": {
      //Добавляем jaunu: ...state kopee  vecos elementus;
      //{ ...action.payload, id: uid() } добавляет новый объект (данные из формы + id).
      const newMovie: Movie = { id: uid(), ...action.payload };
      //Возвращаем новый массив
      return [...state, newMovie];
    }

    case "movies/delete": {
      return state.filter((m) => m.id !== action.payload);
    }

    case "movies/editTitle": {
      const { id, newTitle } = action.payload;
      return state.map((m) => (m.id === id ? { ...m, title: newTitle } : m));
    }
//Если действие не распознано, возвращаем состояние без изменений.
//Это защита от случайных dispatch.



    default:
      return state;
  }
}
