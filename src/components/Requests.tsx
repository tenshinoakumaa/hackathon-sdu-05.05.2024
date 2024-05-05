//@ts-nocheck
import * as React from "react";
import { useState, useEffect } from "react";

export default function Requests() {
  const [clicked, setClicked] = useState(false);
  const [code, setCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [showRequests, setShowRequests] = useState(false);

  function handleClick() {
    if (clicked) {
      if (code == "1111") {
        setShowRequests(true);
      } else {
        alert("Неправильный код");
      }
    }
    setClicked(true);
  }

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://hackathon-sdu-default-rtdb.asia-southeast1.firebasedatabase.app/requests.json",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const tempReq = [];
        console.log(Object.values(result));
        Object.values(result).map((item) => {
          if (item.phone_number === phoneNumber) {
            tempReq.push(item);
          }
        });
        setRequests(tempReq);
        console.log(requests);
      })
      .catch((error) => console.error(error));
  }, [showRequests]);

  const [requests, setRequests] = useState();
  if (showRequests) {
    if (!requests) {
      return (
        <>
          <div className="max-w-6xl mx-auto text-center text-6xl py-14">
            Loading...
          </div>
        </>
      );
    }

    return (
      <>
        <div>
          <ul className="py-4 primary-font">
            {requests.map((request) => (
              <li
                key={request.id}
                className="flex items-center justify-between px-8 py-2 hover:bg-gray-200 cursor-pointer"
                style={{ borderTop: request.id !== 1 ? "2px solid #000" : "" }}
              >
                <div className="text-4xl">{request.name}</div>
                <div>{request.service_name}</div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto primary-font">
        <div className="flex flex-col items-center justify-center py-28 space-y-8">
          <span>
            {!clicked
              ? `Чтобы увидеть свои заявки, введите и подтвердите свой номер
            телефона.`
              : "Подтвердите номер, введя код"}
          </span>
          <input
            type="text"
            placeholder={!clicked ? "Введите номер" : "Подтвердите код"}
            className="rounded-md p-2"
            style={{ border: "1px solid #000" }}
            onChange={(event) => {
              if (clicked) {
                setCode(event.target.value);
              } else {
                setPhoneNumber(event.target.value);
              }
            }}
          />
          <button
            className="p-2 bg-green-500 rounded-md text-white hover:bg-green-600"
            onClick={handleClick}
          >
            {!clicked ? "Отправить" : "Подтвердить номер"}
          </button>
        </div>
      </div>
    </>
  );
}
