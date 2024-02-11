import React from "react";
import avatar from "../images/347237749_563594402602035_3686587927119195446_n.jpg";
import AccordionElem from "../components/Accordion";
const MainPage = () => {
  const courses = [
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
      name1: "TALKING CLUB",
      name2: "РАЗГОВОРНЫЙ КЛУБ",
      elements: [
        "Носитель мн жандуу сабак",
        "12 жандуу сабак (zoom)",
        "3 программа",
        "Электрондук китептер",
      ],
      price: "3000 сом",
      time: "Доступ 1 Ай",
    },
    {
      name1: "200 ТУУРА ЭМЕС ЭТИШТЕР",
      name2: "НЕПРАВИЛЬНЫЕ ГЛАГОЛЫ",
      elements: [
        "Баардык 3 формасы кызыктуу суйломдор, мисалдар менен",
        "Ар бир карточканы носитель окуп берет",
        "Эстеп калууга ар турдуу конугуулор- оюндар",
        "Белеке 3 программа ",
        "Электрондук китептер",
      ],
      price: "1200 сом",
      time: "Доступ 9 ай",
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
      <div className="avatar_container">
        <div className="avatar_container_img">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="avatar_container_text">
          <h1>АНГЛИС ТИЛ КУРСТАРЫ</h1>
          <ul>
            <li className="container_li">Онлайн формат</li>
            <li className="container_li">Жеке мамиле</li>
            <li className="container_li">Бат оздоштуруу</li>
          </ul>
        </div>
      </div>
      <div className="content_container">
        <h3 className="content_container_header">Биздин курстар:</h3>
        <div className="content_container_courses">
          {courses.map((item) => (
            <AccordionElem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
