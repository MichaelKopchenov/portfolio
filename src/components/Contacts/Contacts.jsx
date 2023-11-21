  import Telephone  from '../../images/telephone.png';
  import Mailto from '../../images/mailto.png';
  import Telegram from '../../images/telegram.png';
  import Vkontakte from '../../images/vkontakte.png';
  import GitHub from '../../images/github.png';
  import Container from '../Container/Container';
  import './Contacts.css';
  
  export default function Contacts() {
    return (
      <section id='Contacts' className='contacts__main'>
        <Container>
          <h2 className='contacts__title'>
            Контакты
          </h2>
          <nav className="contacts__nav">
            <ul className='contacts__ul'>
              <li className='contacts__list'>
                <a
                  href="mailto:michaelkopchenov@yandex.ru"
                  target='_blank'
                  className='contacts__link'
                  rel="noreferrer"
                >
                  <p className='contacts__subtitle'>
                  E-mail <img className='contacts__icon' src={Mailto} alt="Почта" />
                  </p>
                  <button type='button' className='contacts__btn' />
                </a>
              </li>
              <li className='contacts__list'>
                <a
                  href="https://t.me/MikhailKopchenov"
                  target='_blank'
                  className='contacts__link'
                  rel="noreferrer"
                >
                  <p className='contacts__subtitle'>
                    Telegram <img className='contacts__icon' src={Telegram} alt="Телеграм" />
                  </p>
                  <button type='button' className='contacts__btn' />
                </a>
              </li>
              <li className='contacts__list'>
                <a
                  href="https://vk.com/coolzero93"
                  target='_blank'
                  className='contacts__link'
                  rel="noreferrer"
                >
                  <p className='contacts__subtitle'>
                    VK <img className='contacts__icon' src={Vkontakte} alt="Вконтакте" />
                  </p>
                  <button type='button' className='contacts__btn' />
                </a>
              </li>
              <li className='contacts__list'>
                <a
                  href="https://github.com/MichaelKopchenov"
                  target='_blank'
                  className='contacts__link contacts__link_type_last'
                  rel="noreferrer"
                >
                  <p className='contacts__subtitle'>
                    GitHub <img className='contacts__icon' src={GitHub} alt="ГитХаб" />
                  </p>
                  <button type='button' className='contacts__btn' />
                </a>
              </li>
            </ul>
            <img className='contacts__image' src={Telephone} alt="Картинка телефона" />
          </nav>
        </Container>
      </section>
    );
  };