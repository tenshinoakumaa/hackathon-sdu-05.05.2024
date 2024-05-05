import * as React from "react";
import mainImg from "../img/mainImg.png";
import mainImg2 from "../img/mainImg2.png";
import "./About.css";

export default function About() {
  return (
    <div className="max-w-6xl w-full mx-auto py-28 space-y-24 about-container">
      <div className="flex justify-between about-item">
        <div className="primary-font w-1/2 text-center space-y-4 flex flex-col items-center justify-center">
          <span className="text-6xl">
            Государственные услуги: удобно, быстро, доступно
          </span>
          <span className="text-4xl text-gray-500">
            Ваше время ценится. Мы делаем государственные услуги максимально
            удобными, чтобы вы могли сосредоточиться на своих делах.
          </span>
        </div>
        <img src={mainImg} className="w-5/12 about-img" alt="" />
      </div>

      <div className=" flex justify-between about-item overflow-hidden">
        <img src={mainImg2} className="w-5/12 rounded-3xl about-img" alt="" />
        <div
          className={`primary-font w-1/2 text-center space-y-4 flex flex-col items-center justify-center`}
        >
          <span className="text-6xl">Экономьте время с нами</span>
          <span className="text-4xl text-gray-500">
            Освободите время для важных моментов жизни. Мы помогаем вам
            справиться с государственными делами быстро и эффективно,
            предоставляя все услуги онлайн в одном месте.
          </span>
        </div>
      </div>
    </div>
  );
}
