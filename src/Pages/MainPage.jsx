import React from "react";
import avatar from "../images/347237749_563594402602035_3686587927119195446_n.jpg";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DoneIcon from "@mui/icons-material/Done";
const MainPage = () => {
  const courses = [
    {
      name1: "АНГЛИС ТИЛИНИН БАЗАСЫ",
      name2: "",
      elements: [
        "12 видеосабак",
        "Жумуш дептери",
        "3 программа",
        "Электрондук китептер",
      ],
      price: "2200 сом",
      time: "Доступ 9 Ай",
    },
    {
      name1: "PRO ENGLISH",
      name2: "",
      elements: [
        "Носитель мн talking club",
        "8 жандуу сабак (zoom)(Рахат мн)",
        "8 видеосабак",
        "3 программа",
        "Электрондук китептер",
      ],
      price: "3800 сом",
      time: "Доступ 1 Ай",
    },

    {
      name1: "АНГЛИС ТИЛИНИН ЧАКТАРЫ",
      name2: "ALL ENGLISH TENSES",
      elements: [
        "12 видеосабак",
        "12 жумушчу дептер",
        "3 программа",
        "Электрондук китептер",
      ],
      price: "2200 сом",
      time: "Доступ 9 ай",
    },
    {
      name1: "ТУУРА ЖАНА ЖЕНИЛ ОКУУ",
      name2: "READ EASILY AND CORRECTLY",
      elements: [
        "12 видеосабак",
        "ТРАНСКРИПЦИЯ",
        "3-3 программа",
        "Жумуш дептери",
        "Электрондук китептер",
      ],
      price: "1900 сом",
      time: "Доступ 9 ай",
    },
    {
      name1: "АНГЛИС ТИЛИ НОЛДОН БАШТАП",
      name2: "ЖОГОРКУ ДЕНГЭЭЛГЕ ЧЕЙИН",
      elements: [
        "50 видеосабак",
        "1000+ конугуу",
        "Фразалык этиштер",
        "Создук ( оюн форматында жатоо)",
        "Электрондук китептер",
        "Белеке 3 программа берилет",
      ],
      price: "5000 сом",
      time: "Доступ 10 жыл ",
    },
    {
      name1: "АНГЛИС ТИЛИНИН БАЗАСЫ",
      name2: "",
      elements: [
        "1-12 видеосабак",
        "2-Жумуш дептери",
        "3-3 программа",
        "4-Электрондук китептер",
      ],
      price: "2200 сом",
      time: "Доступ 9 ай",
    },
  ];
  return (
    <div className="main_container">
      <div className="header_container">
        <div className="header_container_text">
          <h1>
            АНГЛИС ТИЛИН УЙРОНУП <br />
            ДУБАЙГА ЖОЛДОМО УТУП АЛ
          </h1>
        </div>

        <div className="header_container_img"></div>
      </div>
      <div className="avatar_container">
        <div className="avatar_container_text">
          <h2>
            АНГЛИС ТИЛИН ТУУРА ЖАНА ЭФФЕКТИВДУУ УЙРОНУУ УЧУН СИЗГЕ ТЫЛАЙЫКТУУ
            ТАРИФТИ ТАНДАНЫЗ 👇
          </h2>
        </div>
      </div>
      <div className="content_container">
        <div className="content_container_courses">
          {courses.map((item) => (
            <div className="courses_item">
              <h5>{item.name1}</h5>
              {item.name2 !== "" ? <h5>{item.name2}</h5> : null}
              <ul className="courses_item_ul">
                {item.elements.map((elem) => (
                  <li>{elem}</li>
                ))}
              </ul>
              <div className="courses_item_settings">
                <div className="settings_elem">
                  <AttachMoneyIcon />
                  <p>{item.price}</p>
                </div>
                <div className="settings_elem" style={{ textAlign: "end" }}>
                  <AccessTimeIcon />
                  <p>{item.time}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  const phoneNumber = "996552599980"; // Номер телефона без пробелов и знаков "+"
                  const name1 = encodeURIComponent(item.name1); // Кодируем текст для URL
                  window.location.href = `https://wa.me/${phoneNumber}?text=${name1}`; // Создаем ссылку с номером телефона и текстом
                }}
              >
                <WhatsAppIcon />
                КАЙРЫЛУУ
              </button>
            </div>
          ))}
          <div className="about_courses">
            <h4>БУЛ КУРСТА СИЗ:</h4>
            <ul className="about_courses_ul">
              <li
                className="about_courses_li"
                style={{
                  borderRight: "2px solid #211c6a",
                  borderBottomRightRadius: "15px",
                }}
              >
                <DoneIcon />
                <p>эффективдуу менин автордук методикам мeнен</p>
              </li>
              <li
                className="about_courses_li"
                style={{
                  marginLeft: "25px",
                  borderLeft: "2px solid #211c6a",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <DoneIcon />
                <p>⁠женил , жонокой , кызыктуу</p>
              </li>
              <li
                className="about_courses_li"
                style={{
                  borderRight: "3px solid #211c6a",
                  borderTopRightRadius: "15px",
                }}
              >
                <DoneIcon />
                <p>жана эн башкысы кыска убакытта</p>
              </li>
            </ul>
            <h4>КУРС КАНЧА УБАКЫТ ???</h4>
            <ul className="about_courses_ul2">
              <li
                className="about_courses_li2"
                style={{
                  borderTopRightRadius: "15px",
                  borderBottomLeftRadius: "15px",
                }}
              >
                - ар бир сиз тандаган тариф модулдарга болунгон
              </li>
              <li
                className="about_courses_li2"
                style={{
                  borderTopLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                }}
              >
                - ⁠жана ар бири 3-6-9 ай доступ берилет 
              </li>
            </ul>
          </div>
          <div className="my_students">
            <h4>ОКУУЧУЛАРЫМ 👇👇👇</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
