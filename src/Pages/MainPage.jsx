import React from "react";
import avatar from "../images/347237749_563594402602035_3686587927119195446_n.jpg";
import LanguageIcon from "@mui/icons-material/Language";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const MainPage = () => {
  return (
    <div className="main_container">
      <div className="avatar_container">
        <div className="avatar_container_img">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="avatar_container_text">
          <h2>КУРСЫ АНЛГИЙСКОГО ЯЗЫКА</h2>
          <ul>
            <li className="container_li">Онлайн формат обучения</li>
            <li className="container_li">Индивидуальный подход</li>
            <li className="container_li">Быстрое обучение</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
