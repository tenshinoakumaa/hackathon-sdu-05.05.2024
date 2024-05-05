//@ts-nocheck

import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Nav() {
  return (
    <div className="bg-gray-50 py-2">
      <ul className="max-w-6xl mx-auto flex justify-between items-center primary-font">
        <li className="flex items-center space-x-2">
          <img className="w-28" src={logo} alt="" />
          <div
            style={{ borderRight: "2px solid #000", height: "64px" }}
            className="rounded-full"
          ></div>
          <div className="pl-2 w-52 text-left text-gray-500">
            Государственные услуги и информация онлайн
          </div>
        </li>
        <li className="relative">
          <input
            type="text"
            placeholder="Поиск по порталу"
            className="p-4 rounded-xl"
          />
          <img
            style={{ position: "absolute", top: "15px", right: "10px" }}
            className="w-6"
            src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
            alt=""
          />
        </li>
        <li>
          <ul className="flex items-center space-x-12">
            <li className="cursor-pointer hover:text-slate-500">
              <Link to={"/"}>Главная</Link>
            </li>
            <li className="cursor-pointer hover:text-slate-500">
              <Link to={"/requests"}>Мои заявки</Link>
            </li>
            <li className="cursor-pointer hover:text-slate-500">
              <Link to={"/FAQ"}>FAQ</Link>
            </li>
            <Link to={"/apply"}>
              <button className="p-4 bg-green-500 rounded-xl text-white hover:bg-green-800">
                Забронировать
              </button>
            </Link>
          </ul>
        </li>
      </ul>
    </div>
  );
}
