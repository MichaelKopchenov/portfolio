import {
    PROJECT_ONE_URL,
    PROJECT_TWO_URL,
    PROJECT_THREE_URL
  } from '../../utils/urlConstants';
  import Container from '../Container/Container';
  import './Portfolio.css';
  
  export default function Portfolio() {
    return (
      <section className='portfolio__main'>
        <Container>
          <h2 className='portfolio__title'>
            Портфолио
          </h2>
          <nav className="portfolio__nav">
            <ul className='portfolio__ul'>
              <li className='portfolio__list'>
                <a
                  href={PROJECT_ONE_URL}
                  target='_blank'
                  className='portfolio__link'
                  rel="noreferrer"
                >
                  <p className='portfolio__subtitle'>
                    Статичный сайт
                  </p>
                  <button type='button' className='portfolio__btn' />
                </a>
              </li>
              <li className='portfolio__list'>
                <a
                  href={PROJECT_TWO_URL}
                  target='_blank'
                  className='portfolio__link'
                  rel="noreferrer"
                >
                  <p className='portfolio__subtitle'>
                    Адаптивный сайт
                  </p>
                  <button type='button' className='portfolio__btn' />
                </a>
              </li>
              <li className='portfolio__list'>
                <a
                  href={PROJECT_THREE_URL}
                  target='_blank'
                  className='portfolio__link portfolio__link_type_last'
                  rel="noreferrer"
                >
                  <p className='portfolio__subtitle'>
                    Одностраничное приложение
                  </p>
                  <button type='button' className='portfolio__btn' />
                </a>
              </li>
            </ul>
          </nav>
        </Container>
      </section>
    );
  };