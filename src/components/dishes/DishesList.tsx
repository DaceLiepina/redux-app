import { type JSX } from "react";
import style from "./DishesList.module.css";
import DishEditForm from "./DishEditForm";
import { useDispatch, useSelector } from "react-redux";
import selectDishes from "./selectors";
import type { DishId } from "./types/Dish";
import ClearIcon from "@mui/icons-material/Clear";


export default function DishesList(): JSX.Element {
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();
  const handleDelete = (id: DishId): void => {
    dispatch({ type: "dishes/delete", payload: id });
  };
  return (
    <ul className={style.list}>
      {dishes.map((dish) => (
        <li key={dish.id} className={style.dishCard}>
          <h3 className={style.heading}>{dish.title}</h3>
          <p className={style.category}>{dish.category}</p>
          <img className={style.image} src={dish.image} alt={dish.title} />
          <p className={style.price}>{dish.price} €</p>
          <div className={style.icons}></div>
          <ClearIcon onClick={() => handleDelete(dish.id)} />
          <DishEditForm dish={dish} />
        </li>
      ))}
    </ul>
  );
}
