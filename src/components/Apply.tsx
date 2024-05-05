import Modal from "react-modal";
import * as React from "react";
import successIcon from "../img/successIcon.svg";
import { API } from "../api/variables";
import { useEffect, useState } from "react";
import { Category, Service } from "../types/types";

const Xbutton = styled.button`
  position: absolute;
  right: 1rem;
`;
const ModalMainText = styled.span`
  font-family: "TildaSansRegular";
  font-size: 35px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
  color: #1e2151;
`;
const ModalSecondText = styled.span`
  font-family: "TildaSansRegular";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  color: #0000009c;
`;
const ModalThirdText = styled.span`
  font-family: "TildaSansRegular";
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
  color: #00000057;
`;

const ModalFourthText = styled.span`
  font-family: "TildaSansRegular";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
`;

import { styled } from "styled-components";
const SuccessDiv = styled.div`
  color: #00000057;
`;

const StyledDiv3 = styled.div`
  position: absoulte;
  z-index: 100000;
`;

const StyledButton = styled.button`
  width: 196px;
  height: 71px;
  border-radius: 50px;
  background: #d98646;
  position: relative;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-family: sans-serif;
  background: #d98646;
  background-size: 400%;
  z-index: 0;

  &:hover {
    animation: animate 8s linear infinite;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #d98646, #d98646, #d98646, #d98646);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
  }

  &:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }
`;

const StyledInput = styled.input`
  border-bottom: 1px solid #0000003b;
  text-align: center;
`;
import X from "../img/X.svg";

export default function Apply() {
  const openModal2 = () => {
    setModal2IsOpen(true);
  };

  const closeModal2 = () => {
    setModal2IsOpen(false);
  };

  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [categories, setCategories] = useState<Category[]>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const [name, setName] = useState();
  const [phone_number, setPhoneNumber] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${API}/category.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => setCategories(Object.values(result)));
  }, []);

  function handleSelectingCategory(category) {
    setSelectedCategory(category);
  }

  function handleSelectingService(service) {
    setSelectedService(service);
    openModal(true);
  }

  function handleRequest() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      phone_number: phone_number,
      name: name,
      time: `${selectedDate} - ${selectedTime}`,
      service_name: selectedService?.name,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://hackathon-sdu-default-rtdb.asia-southeast1.firebasedatabase.app/requests.json",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        openModal2(true);
      })
      .catch((error) => console.error(error));
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const startHour = 8;
  const endHour = 22;
  const interval = selectedService?.duration;
  const [times, setTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState();

  useEffect(() => {
    const newTimes = [];
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        newTimes.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    setTimes(newTimes);
  }, selectedService);

  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  if (!categories) {
    return (
      <>
        <div className="max-w-6xl mx-auto text-center text-6xl py-14">
          Loading...
        </div>
      </>
    );
  }

  if (selectedCategory != null) {
    return (
      <>
        <div className="max-w-6xl mx-auto">
          <div
            className="primary-font pt-4 flex items-center text-2xl cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3042/3042406.png"
              alt=""
              style={{ rotate: "180deg" }}
              className="w-12"
            />
            Вернуться
          </div>
          <ul className="py-4 primary-font">
            {selectedCategory.services.map((service) => (
              <li
                key={service.id}
                className="flex items-center justify-between px-8 py-2 hover:bg-gray-200 cursor-pointer"
                style={{ borderTop: service.id !== 1 ? "2px solid #000" : "" }}
                onClick={() => handleSelectingService(service)}
              >
                <div className="text-4xl">{service.name}</div>
                <div>{service.description}</div>
              </li>
            ))}
          </ul>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              width: "400px",
              height: "80%",
              margin: "auto auto",
              borderRadius: "20px",
            },
          }}
        >
          <div className="text-center text-2xl flex flex-col items-center space-y-8 p-1 primary-font">
            <Xbutton onClick={closeModal}>
              <img src={X} alt="" />
            </Xbutton>
            <ModalMainText>{selectedService?.name}</ModalMainText>
            <ModalSecondText className="px-6"></ModalSecondText>
            <StyledInput
              placeholder="Имя"
              value={name}
              onChange={handleNameChange}
            />
            <StyledInput
              placeholder="+7 (000) 000 00 00"
              value={phone_number}
              onChange={handlePhoneNumberChange}
            />
            <input
              type="date"
              className="p-2 rounded-xl px-4"
              style={{ border: "1px solid #000" }}
              onChange={handleDateChange}
            />
            <div>
              <button onClick={toggleList}>Выбрать время</button>
              {isOpen && (
                <div>
                  <ul>
                    {times.map((time, index) => (
                      <li
                        style={{
                          border: "1px solid #000",
                          background: selectedTime == time ? "gray" : "",
                        }}
                        key={index}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <StyledButton className="text-xl" onClick={() => handleRequest()}>
              Отправить заявку
            </StyledButton>
            <ModalThirdText className="px-4">
              Нажимая кнопку "Отправить заявку”, вы соглашаетесь с обработкой
              персональных данных
            </ModalThirdText>
          </div>
        </Modal>
        <Modal
          isOpen={modal2IsOpen}
          onRequestClose={closeModal2}
          style={{
            content: {
              width: `${window.innerWidth >= 800 ? "50" : "80"}%`,
              height: "80%",
              margin: "auto auto",
              borderRadius: "20px",
              zIndex: 10000,
            },
          }}
        >
          <StyledDiv3 className="text-center text-2xl flex flex-col items-center space-y-8 p-1">
            <Xbutton onClick={closeModal2}>
              <img src={X} alt="" />
            </Xbutton>
            <div className="flex flex-col items-center py-2 space-y-12">
              <img src={successIcon} alt="" />
              <SuccessDiv className="flex flex-col items-center space-y-2">
                <span>Спасибо за вашу заявку!</span>
                <span>Наш менеджер свяжется с вами в ближайшее время.</span>
                <span>Ожидайте звонка или письма.</span>
              </SuccessDiv>
              <span className="underline text-orange-400" onClick={closeModal2}>
                Отправить заявку повторно
              </span>
            </div>
          </StyledDiv3>
        </Modal>
        ;
      </>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <ul className="py-4 primary-font">
          {categories.map((category) => (
            <li
              key={category.id}
              className="flex items-center justify-between px-8 py-2 hover:bg-gray-200 cursor-pointer"
              style={{ borderTop: category.id !== 1 ? "2px solid #000" : "" }}
              onClick={() => handleSelectingCategory(category)}
            >
              <div className="text-4xl">{category.name}</div>
              <div>{category.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
