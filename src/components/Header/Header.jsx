import { useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Contacts from '../Contacts/Contacts';
import Navigtion from '../Navigation/Navigation';
import './Header.css';

export default function Header() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <>
      {isShown ? <Navigtion /> : null}
        <section className="header__main">
          <div className='header__container'>
            <div className="header__about">
              <h1 className="header__title">
                Портфолио Веб-разработчика<br /> Копченова Михаила Викторовича.
              </h1>
              <p className="header__subtitle">
                Нажми на кнопку, чтобы узнать больше про мои работы и меня.
              </p>
              <div className="header__logo" />
              <a href='#AboutMe'>
                <button onClick={handleClick} className="header__link">
                  Узнать больше
                </button>
              </a>
            </div>
          </div>
        </section>
      {isShown 
        ? (<> 
              <AboutMe /> 
              <Portfolio /> 
              <Contacts /> 
          </>) 
        : null}
    </>
  );
};