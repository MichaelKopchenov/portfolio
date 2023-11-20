import { PRACTICUM_URL, GITHUB_URL } from '../../utils/urlConstants';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Портфолио Веб-разработчика
      </p>
      <div className="footer__container">
        <p className="footer__subtitle">
          &copy; {new Date().getFullYear()} Копченов Михаил Викторович
        </p>
        <nav className="footer__navigation">
          <a
            href={PRACTICUM_URL}
            target='_blank'
            className="footer__link"
            rel="noreferrer">
              Яндекс.Практикум
          </a>
          <a
            href={GITHUB_URL}
            target='_blank'
            className="footer__link"
            rel="noreferrer">
              Github
          </a>
        </nav>
      </div>
    </footer>
  );
};