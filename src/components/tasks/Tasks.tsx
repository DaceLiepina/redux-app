import { type JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import style from './Tasks.module.css'

export default function Tasks(): JSX.Element {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  function handleChangeStatus(id: string): void {
    dispatch({ type: "tasks/changeStatus", payload: id });
  }

  function handleRemove(id: string): void {
    dispatch({ type: "tasks/remove", payload: id });
  }

  return (
  <div className={style.wrappersmall}>
    <h2 className={style.title}>🗒️ Task list</h2>

    {tasks.length === 0 ? (
      <p className={style.empty}>No tasks yet</p>
    ) : (
      <ul className={`${style.form} ${style.list}`}>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`${style.item} ${task.isDone ? style.done : ""}`}
          >
            <div className={style.textBlock}>
              <span className={style.titleText}>{task.title}</span>
              <span className={style.description}>{task.description}</span>
            </div>

            <div className={style.actions}>
              <DeleteIcon
                className={style.icon}
                onClick={() => handleRemove(task.id)}
              />
              {task.isDone ? (
                <CheckBoxIcon
                  className={style.icon}
                  onClick={() => handleChangeStatus(task.id)}
                />
              ) : (
                <CheckBoxOutlineBlankIcon
                  className={style.icon}
                  onClick={() => handleChangeStatus(task.id)}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);
}


