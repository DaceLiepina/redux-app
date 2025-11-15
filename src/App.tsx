import type { JSX } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import Sandwich from "./components/Sandwich/Sandwich";
import SmartTasks from "./components/tasks/SmartTasks";
import DishForm from "./components/dishes/DishForm";
import DishesList from "./components/dishes/DishesList";
import ProductCard from "./components/ProductCard/ProductCard";
import { MovieCreation } from "./components/Movies/MovieCreation";
import Movies from "./components/Movies/Movies";
// import "./responsive.css"

function App(): JSX.Element {
  return (
    <div>
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.yHO9EA1tfmLQoatRkVA4_AHaFj?pid=Api&P=0&h=180"
        alt="redux img"
        className="mx-auto border-4 border-cream-200 rounded-lg"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-lime-600 mb-10 mt-15">Movies Library</h1>
      <MovieCreation />
      <Movies />
      <ProductCard />
      <Counter />
      <Sandwich />
      <SmartTasks />
      <DishForm />
      <DishesList />
    </div>
  );
}

export default App;
