import { GITHUB_URL } from '../../utils/urlConstants';
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
              Фронтенд-разработчик, 29 лет
            </p>
            <p className="aboutme__description">
              Я родился и живу в Москве,
              закончил Московский Политех. У меня есть жена
              и сын. Я люблю слушать музыку, а ещё увлекаюсь культуризмом.
              Недавно начал кодить. С 2017 года работаю в РАНХиГС ИБДА.
              После того, как прошёл курс  по веб-разработке,
              начал заниматься фриланс-заказами, но не ушёл с постоянной работы.
              </p>
            <a
              href={GITHUB_URL}
              target='_blank'
              className="aboutme__link"
              rel="noreferrer">
                Github
            </a>
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