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
    imgUrl: "https://tse1.mm.bing.net/th/id/OIP.892k3pcvWO9Ydn91TPAmPAHaDt?pid=Api&P=0&h=180",
    videoUrl: "https://www.youtube.com/watch?v=SfWvUjrgj9M"
  },
  {
    id: uid(),
    title: "Ziemlich gute Freunde",
    genre: "Drama",
    country: "France",
    releaseDate: "2011-11-02",
    imgUrl: "https://tse1.mm.bing.net/th/id/OIP.zRMFpEEF1GquBAu-x5XgBgHaEK?pid=Api&P=0&h=180",
    videoUrl: "https://www.youtube.com/watch?v=34WIbmXkewU"
  },
  {
  id: uid(),
  title: "Bohemian Rhapsody",
  genre: "Biography / Drama / Music",
  country: "UK / USA",
  releaseDate: "2018-10-24",
  imgUrl: "https://tse4.mm.bing.net/th/id/OIP.UCOMTFJld7ET5NExg1gPcQHaE8?pid=Api&P=0&h=180",
  videoUrl: "https://www.youtube.com/watch?v=mP0VHJYFOAU"
}
  
 

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
