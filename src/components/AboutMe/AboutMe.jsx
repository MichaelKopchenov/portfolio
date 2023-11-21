import avatar from '../../images/Avatar.jpeg';
import Container from "../Container/Container";
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section id='AboutMe' className="aboutme">
      <Container>
        <h2 className="aboutme__title">
          Обо мне
        </h2>
        <div className="aboutme__container">
          <div className="aboutme__text-container">
            <h3 className="aboutme__name">
              Михаил
            </h3>
            <p className="aboutme__job">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="aboutme__description">
              Я родился и живу в Москве,
              закончил Московский Политех. У меня есть жена
              и сын. Я люблю слушать музыку, а ещё увлекаюсь культуризмом.
              Недавно начал кодить. С 2017 года работаю в РАНХиГС ИБДА.
              После того, как прошёл курс  по веб-разработке,
              начал заниматься фриланс-заказами, но не ушёл с постоянной работы.
              </p>
              <h2 className='aboutme__techs'>
                Технологии
              </h2>
              <p className="aboutme__techs-description">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
              </p>
              <ul className="aboutme__ul">
                <li className="aboutme__list">
                  HTML
                </li>
                <li className="aboutme__list">
                  CSS
                </li>
                <li className="aboutme__list">
                  JS
                </li>
                <li className="aboutme__list">
                  React
                </li>
                <li className="aboutme__list">
                  Git
                </li>
                <li className="aboutme__list">
                  Express.js
                </li>
                <li className="aboutme__list">
                  mongoDB
                </li>
                <li className="aboutme__list">
                  Node.js
                </li>
                <li className="aboutme__list">
                  DOM
                </li>
                <li className="aboutme__list">
                  Webpack
                </li>
                <li className="aboutme__list">
                  React Router
                </li>
                <li className="aboutme__list">
                  Flexbox
                </li>
              </ul>
          </div>
          <img
            src={avatar}
            alt="Аватар"
            className="aboutme__avatar"
          />
        </div>
      </Container>
    </section>
  );
};