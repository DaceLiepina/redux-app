import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import type { RootState } from "./store";
import MovieEdit from "./MovieEdit";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
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
    <div className="mt-10 mb-24 px-4">
      <h3 className="text-3xl font-bold text-emerald-700 mb-5">Movies</h3>

      <ul className="grid gap-4">
        {movies.map((m) => (
          <li
            key={m.id}
            className="relative shadow-md p-4 rounded-2xl flex gap-4 items-center 
border border-emerald-100 bg-gradient-to-br from-cream-20 to-orange-100"
          >
            <img
              src={m.imgUrl}
              alt={m.title}
              className="w-30 h-45 object-cover rounded-xl border border-emerald-200 md:w-30 md:h-45 sm:h-32 "
            />

            <div className="flex flex-col justify-between flex-1">
              <div className="text-2xl font-bold text-emerald-900">
                {m.title}
              </div>
              <div className="text-xl text-gray-800">
                {m.country} • {m.genre} • {m.releaseDate}
              </div>

              <a
                href={m.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-900 text-2xl underline mt-4 inline-block hover:text-emerald-800"
              >
                <PlayCircleOutlineIcon fontSize="medium" />
                Watch →
              </a>
            </div>

            <div className="absolute bottom-3 right-3 flex gap-3 items-center">
              <MovieEdit movie={m} />

              <button
                onClick={() => remove(m.id)}
                title="Delete"
                className="text-red-600 hover:text-red-800"
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
{
  /* //Для каждого фильма выведите:
Название.
Страну, жанр, дату выхода.
Кнопку удаления.
Компонент редактирования ( <MovieEdit /> ). */
}

{
  /* При нажатии на иконку удаления вызывайте dispatch({ type: 'movies/delete', payload: id
}) . */
}
