import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import style from './Counter.module.css'

export default function Counter():JSX.Element{
    const dispatch = useDispatch();
    function handlePlus(): void {
        // Dispatch мы вызываем когда хотим изменить централизованное состояние
        dispatch ({ type: 'counter/plus', payload: 1 })
    } // payload: skaitlis, par cik mainiisies skaitlis katru reizi, kad to izsauks
    function handleMinus(): void {
        // Dispatch мы вызываем когда хотим изменить централизованное состояние
        dispatch ({ type: "counter/minus", payload: 1 })
    }
    function handleReset(): void {
        // Dispatch мы вызываем когда хотим изменить централизованное состояние
        dispatch ({ type: "counter/reset"})
    }

    // useSelector - функция для получения значения централизованного состояния
    const counter = useSelector((state: RootState) => state.counter.value)
    return(
<div className={style.container}>
<button type="button" onClick={handlePlus} className={style.btn}> + </button>
{counter}
<button type="button" onClick={handleMinus} className={style.btn}>- </button>
<button type="button" onClick={handleReset} className={style.btn}>Reset 🔄</button>

</div>
    )
}