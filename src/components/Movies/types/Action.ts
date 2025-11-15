
import type MovieCredentials from "./MovieCredentials";

export type Action = 
|{ type: "movies/add", payload:MovieCredentials }
|{ type: "movies/delete", payload: string }
|{ type: 'movies/editTitle'; payload: { id: string; newTitle: string }};

//Определите тип действия (Action type) для трёх операций: 
//Каждое действие должно включать:
// свойство type (строковый литерал);
// свойство payload , соответствующее типу данных (новый фильм, id или
// объект { id, newTitle } ).

//Здесь мы описываем все возможные Redux-действия, которые reducer может обрабатывать.

//Это помогает TypeScript предупреждать ошибки: если кто-то забудет передать image — компилятор выдаст ошибку.


