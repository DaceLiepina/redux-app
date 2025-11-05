import { useDispatch, useSelector } from "react-redux";
import type { JSX } from "react";
import type { RootState } from "../../store";
import style from "./Sandwich.module.css";


export default function Sandwich(): JSX.Element {
  const dispatch = useDispatch();
  const sandwich = useSelector((state: RootState) => state.sandwich.value);
 

  return (
    <div
      className={style.container}
    >
      <h2 className={style.title}>Sandwich</h2>
      <img
        src="https://mur-mur.top/uploads/posts/2023-05/1683186165_mur-mur-top-p-mini-burgeri-keitering-krasivo-53.jpg"
        alt=""
      />
      <p>{sandwich}</p>

      <div className={style.btnContainer}>
        <button onClick={() => dispatch({ type: "sandwich/addBread" })} className={style.btn}>
          Add bread
        </button>
        <button onClick={() => dispatch({ type: "sandwich/addCheese" })} className={style.btn}>
          Add cheese
        </button>
        <button onClick={() => dispatch({ type: "sandwich/addBacon" })} className={style.btn}>
          Add bacon
        </button>
        <button onClick={() => dispatch({ type: "sandwich/addSalad" })} className={style.btn}>
          Add salad
        </button>
        <button onClick={() => dispatch({ type: "sandwich/reset" })} className={style.btn}>
          Reset 🔄
        </button>

       
      </div>
    </div>
  );
}