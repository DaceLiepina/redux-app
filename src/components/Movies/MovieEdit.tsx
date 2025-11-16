import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import type { Movie } from "./types/Movie";

//Реализуйте функционал редактирования названия фильма:
interface Props {
  movie: Movie;
}

export const MovieEdit: React.FC<Props> = ({ movie }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  function startEdit() {
    setNewTitle(movie.title);
    setEditing(true);
  }
//После отправки формы:
// вызывается dispatch с типом 'movies/editTitle' и payload: { id, newTitle } ;
// форма скрывается, поле очищается
  function save() {
    const titleTrimmed = newTitle.trim();
    if (!titleTrimmed) return;
    dispatch({
      type: "movies/editTitle",
      payload: { id: movie.id, newTitle: titleTrimmed },
    });
    setEditing(false);
    setNewTitle("");
  }

  function cancel() {
    setEditing(false);
    setNewTitle("");
  }

return (
  <div>
    {!editing ? (
      <button
        onClick={startEdit}
        title="Edit"
        className="text-emerald-700 hover:text-emerald-900 transition p-1 sm:p-2"
      >
        <EditIcon fontSize="small"/>
      </button>
    ) : (
      <div className="flex items-center gap-2 max-w-full">
        <input
          className="p-1 sm:p-2 
              border border-emerald-300 rounded-md bg-emerald-50 
              focus:ring-2 focus:ring-emerald-400 text-black
              text-sm sm:text-base
              max-w-[120px] sm:max-w-[170px]"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button
          onClick={save}
          className="px-2 py-1 sm:px-3 sm:py-1.5 bg-emerald-600 text-gray-700 rounded-lg hover:bg-emerald-700 transition"
        >
          Save
        </button>
        <button
          onClick={cancel}
          className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    )}
  </div>
);
};

export default MovieEdit;
