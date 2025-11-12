import type { JSX } from "react";
    import type { Product } from "./types/Product";
 


export default function ProductGrid():JSX.Element {
  const products: Product[] = [
    {
      id: 1,
      name: "Coffee",
      price: 8.9,
      img: "https://tse2.mm.bing.net/th/id/OIP.0IJ2w41pZb_W7omG6kaPuQHaE8?pid=Api&P=0&h=180",
      description: "Aromatic Arabic coffee from Brazil.",
    },
    {
      id: 2,
      name: "Tea",
      price: 4.5,
      img: "https://wallpaperaccess.com/full/2318047.jpg",
      description: "Tea with natural flavor"
    },
    {
      id: 3,
      name: "Chocolate",
      price: 3.2,
      img: "https://cdn.shopify.com/s/files/1/0088/2517/6123/files/Cacao_and_Cocoa_1024x1024.png?v=1683700069",
    },
    {
      id: 3,
      name: "Lemon juice",
      price: 2.3,
      img: "https://tse3.mm.bing.net/th/id/OIP.fRxcXTtCa8-a2kTyEWQ7wgHaEO?pid=Api&P=0&h=180",
    },
    {
      id: 3,
      name: "Ginger spice",
      price: 3.5,
      img: "https://www.samenhaus.de/gartenblog/wp-content/uploads/2022/07/Ingwer-und-Kurkuma_145606490-scaled-1000x563.jpeg",
    },
    {
      id: 3,
      name: "Olive oil",
      price: 9.9,
      img: "https://tse1.mm.bing.net/th/id/OIP.xHd8k2YHWQ8RoxPZZZj-BAHaEO?pid=Api&P=0&h=180",
    },

  ];

  return (
    <div className="min-h-screen rounded-2xl bg-gradient-to-br from-cream-20 to-orange-200 p-4 sm:p-6 md:p-10 m-6 ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-lime-600 mb-10">
        🌿 Natural Flavors Store
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <img src={p.img} alt={p.name} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
            <div className="p-5 flex flex-col justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{p.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-amber-700 font-bold">{p.price}</span>
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}