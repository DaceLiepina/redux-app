// import { useState, type FormEvent, type JSX } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import type TaskCredentials from "../tasks/types/TaskCredentials";
import style from './TaskCreation.module.css'
import type { JSX } from "react";

export default function TaskCreation(): JSX.Element {
  // const [title, setTitle] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch();

  // function handleSubmit(event: FormEvent<HTMLFormElement>): void {
  //   event.preventDefault(); // ta ka ta ir metode, vienmer pievieno iekavas
  //   dispatch({
  //     type: "tasks/add",
  //     payload: { title, description, isDone: false },
  //   });
  //   setTitle("");
  //   setDescription("");
  // }

  const validationSchema = Yup.object({
    title: Yup.string()
      .trim()
      .min(3, "Минимум 3 символа")
      .max(50, "Максимум 50 символов")
      .required("Введите название задачи"),
    description: Yup.string()
      .trim()
      .max(100, "Максимум 100 символов")
      .required("Введите описание"),
  });

  // Formik forma
  const formik = useFormik<TaskCredentials>({
    initialValues: {
      title: "",
      description: "",
      isDone: false,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch({
        type: "tasks/add",
        payload: { 
          title: values.title.trim(), 
          description: values.description.trim(), 
          isDone: false 
        },
      });
      resetForm();
    },
  });

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Create a task</h1>

      <form onSubmit={formik.handleSubmit} className={style.form}>
        <div className={style.group}>
          <input
            type="text"
            name="title"
            placeholder="Task name"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={style.input}
          />
          {formik.touched.title && formik.errors.title && (
            <div className={style.error}>{formik.errors.title}</div>
          )}
        </div>

        <div className={style.group}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={style.input}
          />
          {formik.touched.description && formik.errors.description && (
            <div className={style.error}>{formik.errors.description}</div>
          )}
        </div>

        <button type="submit" className={style.addButton}>
         Add a task
        </button>
      </form>
    </div>
  );
}