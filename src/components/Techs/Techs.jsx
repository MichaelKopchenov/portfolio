import Container from '../Container/Container';
import './Techs.css';

export default function Techs() {
  return (
    <section className="techs__main">
      <Container>
        <h2 className="techs__title">
          Технологии
        </h2>
        <h3 className="techs__subtitle">
          7 технологий
        </h3>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__ul">
          <li className="techs__list">
            HTML
          </li>
          <li className="techs__list">
            CSS
          </li>
          <li className="techs__list">
            JS
          </li>
          <li className="techs__list">
            React
          </li>
          <li className="techs__list">
            Git
          </li>
          <li className="techs__list">
            Express.js
          </li>
          <li className="techs__list">
            mongoDB
          </li>
        </ul>
      </Container>
    </section>
  );
};