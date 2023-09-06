import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-screen bg-navbar hover:bg-navbarhover p-3 ">
      <div className="flex-1 ">
        <div className="flex justify-between Search  border rounded-md w-fit">
          <select className="border-none bg-inherit appearance-none px-2">
            <option value="">ُEN</option>
            <option value="">AR</option>
            <option value="">FR</option>
          </select>
          <input
            type="text"
            className="outline-0 border-none bg-inherit " 
            placeholder="Search"
          />
          <SearchIcon className="cursor-pointer" />
        </div>
      </div>
      <div className="flex-1 text-center text-xl font-bold cursor-pointer flex justify-center items-center">
      <img src="logo.png" class="h-8 mr-3" alt="FlowBite Logo" />
        EverythingStore
      </div>
      <div className="flex-1">
        <ul className="flex justify-end">
          <li className="px-1 cursor-pointer">Rgister</li>
          <li className="px-1 cursor-pointer">Login</li>
          <li className="pr-3 cursor-pointer">
            <ShoppingCartOutlinedIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
