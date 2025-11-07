import type { JSX } from "react";
import TaskCreation from "../tasks/TaskCreation";
import Tasks from "../tasks/Tasks";
import style from "../tasks/TaskCreation.module.css";

export default function SmartTasks(): JSX.Element {
  return (
    <div className={style.wrapper}>
      <TaskCreation />
      <Tasks />
    </div>
  );
}