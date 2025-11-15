import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import type { RootState } from "./store";
import MovieEdit from "./MovieEdit";
//Компонент отвечает за отображение всех фильмов из Redux-хранилища.
export const Movies: React.FC = () => {
  //С помощью useSelector получите массив фильмов ( state.movies ).
  //Селектор — функция, которая извлекает нужный кусок состояния из Redux Store.
//RootState — общий тип состояния всего приложения (определён в store.ts ).
  const movies = useSelector((s: RootState) => s.movies);
  const dispatch = useDispatch();

  function remove(id: string) {
    dispatch({ type: "movies/delete", payload: id });
  }

 return (
  <div className="max-w-xl mx-auto mt-6 mb-15">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-lime-600 mb-10">Movies</h3>

    <ul className="space-y-3">
      {movies.map((m) => (
        <li
          key={m.id}
          className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl shadow-sm flex justify-between items-center"
        >
          <div>
            <div className="font-semibold text-emerald-900">{m.title}</div>
            <div className="text-sm text-emerald-700">
              {m.country} • {m.genre} • {m.releaseDate}
            </div>
          </div>

          <div className="flex items-center gap-3 text-emerald-900">
            <MovieEdit  movie={m}  />

            <button
              onClick={() => remove(m.id)}
              title="Delete"
              className="text-red-600 hover:text-red-800 transition"
            >
              <DeleteIcon />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
};

export default Movies;
 {/* //Для каждого фильма выведите:
Название.
Страну, жанр, дату выхода.
Кнопку удаления.
Компонент редактирования ( <MovieEdit /> ). */}


{/* При нажатии на иконку удаления вызывайте dispatch({ type: 'movies/delete', payload: id
}) . */}
