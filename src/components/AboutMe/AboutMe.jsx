import avatar from '../../images/Avatar.jpeg';
import { technology } from '../../utils/arraysList';
import { description, techDescription } from '../../utils/textList';
import TechnologyList from '../TechnologyList/TechnologyList';
import Container from "../Container/Container";
import './AboutMe.css';

export default function AboutMe () {
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
              {description}
            </p>
            <h2 className='aboutme__techs'>
              Технологии
            </h2>
            <p className="aboutme__techs-description">
              {techDescription}
            </p>
            <ul className="aboutme__ul">
              <TechnologyList {...technology[0]} />
              <TechnologyList {...technology[1]} />
              <TechnologyList {...technology[2]} />
              <TechnologyList {...technology[3]} />
              <TechnologyList {...technology[4]} />
              <TechnologyList {...technology[5]} />
              <TechnologyList {...technology[6]} />
              <TechnologyList {...technology[7]} />
              <TechnologyList {...technology[8]} />
              <TechnologyList {...technology[9]} />
              <TechnologyList {...technology[10]} />
              <TechnologyList {...technology[11]} />
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