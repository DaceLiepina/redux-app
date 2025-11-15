import { useState } from "react";
import { useDispatch } from "react-redux";
import type MovieCredentials from "./types/MovieCredentials";

//Создайте форму для добавления нового фильма.
// Компонент должен включать:
// 1. Локальное состояние (через useState ) для хранения значений полей:
// title , genre , country , releaseDate , error .

export const MovieCreation: React.FC = () => {
  const dispatch = useDispatch();

  //Локальное состояние (через useState ) для хранения значений полей:
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<string>("");
  const [imgUrl, setImgUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");

  //Валидацию полей
  //Проверяйте, что все поля заполнены.
  function validate(): boolean {
    if (
      !title.trim() ||
      !genre.trim() ||
      !country.trim() ||
      !releaseDate.trim() ||
      !imgUrl.trim() ||
      !videoUrl.trim()
    ) {
      //Если нет — выводите сообщение об ошибке красным цветом
      setError("Please fill in all fields.");
      return false;
    }
    setError("");
    return true;
  }
  //При нажатии кнопки «Создать» проверяйте поля.
  function onCreate() {
    if (!validate()) return;

    const payload: MovieCredentials = {
      title: title.trim(),
      genre: genre.trim(),
      country: country.trim(),
      releaseDate: releaseDate.trim(),
      imgUrl: imgUrl.trim(),
      videoUrl: videoUrl.trim(),
    };

    //Если всё корректно — вызывайте dispatch с действием movies/add и payload из введённых данных.
    dispatch({ type: "movies/add", payload });

    // clear form После отправки очищайте форму и ошибки.
    setTitle("");
    setGenre("");
    setCountry("");
    setReleaseDate("");
    setImgUrl("");
    setVideoUrl("");
    setError("");
  }

  return (
    <div className="border-emerald-200 rounded-2xl p-6 shadow-md max-w-md mx-auto mt-4 bg-gradient-to-br from-cream-20 to-orange-100">
      <h3 className="text-2xl font-semibold text-emerald-900 mb-4">
        Add a movie
      </h3>

      <div className="flex flex-col gap-3">
        <input
          className="p-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-emerald-50 text-emerald-900"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="p-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-emerald-50  text-emerald-900"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <input
          className="p-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-emerald-50  text-emerald-900"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <input
          className="p-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-emerald-50  text-emerald-900"
          placeholder="Release date (e.g. 2023-08-12)"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <input
          className="p-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-emerald-50  text-emerald-900"
          placeholder="Image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />

        <input
          className="p-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-emerald-50  text-emerald-900"
          placeholder="Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />

        {error && (
          <div className="text-red-600 font-medium text-sm">{error}</div>
        )}

        <button
          onClick={onCreate}
          className="mt-2 bg-emerald-600 text-white py-2 px-4 rounded-xl hover:bg-emerald-700 transition"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default MovieCreation;
