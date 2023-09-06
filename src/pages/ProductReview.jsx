import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const ProductReview = () => {
  const [quantite, setQuantitie] = useState(0);
  const add = () => {
    setQuantitie(quantite + 1);
  };
  const minus = () => {
    quantite > 0 ? setQuantitie(quantite -1) : alert("ro7 ay ")
  };
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="flex justify-items-start justify-between m-4 w-screen">
        <div className="flex-none">
          
          <img
            src="https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg"
            alt=""
            className="h-auto max-w-screen-md"
          />
        </div>
        <div className="flex-auto  flex flex-col">
          <h1 className="text-left font-semibold text-xl">product Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            perspiciatis porro dolores non qui architecto officia voluptates
            cupiditate mollitia minima! Odit quaerat deleniti facilis, debitis
            nisi earum aliquam illo magni.
          </p>
          <h1 className="text-left text-2xl">50$</h1>
          <p>
            color:
            <div className="flex m-2">
              <div className="bg-black w-5 h-5 rounded-full mx-1"></div>
              <div className="bg-red-700 w-5 h-5 rounded-full mx-1"></div>
              <div className="bg-orange-700 w-5 h-5 rounded-full mx-1"></div>
            </div>
          </p>
          <div className="m-3">
            <button onClick={minus}>-</button>
            <span className=" rounded-lg w-5 h-5 m-3 p-3 bg-slate-500 " >{quantite}</span>
            <button onClick={add}>+</button>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductReview;
