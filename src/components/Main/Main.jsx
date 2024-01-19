import { useState } from "react";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Main.css";

export default function Main() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      {isShown ? <Header /> : null}
      <section className="main">
        <div className="main__container">
          <div className="main__about">
            <h1 className="main__title">
              Портфолио Веб-разработчика
              <br /> Копченова Михаила Викторовича.
            </h1>
            <p className="main__subtitle">
              Нажми на кнопку, чтобы узнать больше про мои работы и меня.
            </p>
            <div className="main__logo" />
            <a href="#AboutMe">
              <button onClick={handleClick} className="main__link">
                Узнать больше
              </button>
            </a>
          </div>
        </div>
      </section>
      {isShown ? (
        <>
          <AboutMe />
          <Portfolio />
          <Contacts />
        </>
      ) : null}
      <Footer />
    </>
  );
}
