"use client";
import React from "react";
import menuItems from "../../Constants/MENUITEMS"; 
import plus from "../../../../public/images/Plus.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useOrder } from "../../../Ordering/Context/OrderContext"; 

const Burgers = () => {
  const router = useRouter();
  const { addToBasket, setSelectedCategory } = useOrder();

  const handleAdd = (item) => {
    addToBasket({
      id: item.id,
      name: item.title, 
      price: item.price,
      category: "Burger",
      image: item.image,
      qty: 1 
    });

    setSelectedCategory("Burger");

    router.push("/Ordering");
  };

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <p className="text-2xl font-bold mb-5">Burgers</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="grid grid-cols-[1fr_160px] gap-4 p-6">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <p className="text-xl font-bold">£{item.price}</p>
              </div>

              <div className="relative w-32 h-32 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover"
                  fill
                />

                <button
                  onClick={() => handleAdd(item)}
                  className="absolute -bottom-1 -right-1 bg-white shadow-lg rounded-tl-2xl p-3 hover:bg-green-600 cursor-pointer transition z-10"
                >
                  <Image src={plus} alt="add" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Burgers;