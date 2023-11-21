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
            href='#Navigation'
            className="footer__link"
            rel="noreferrer">
              В начало
          </a>
        </nav>
      </div>
    </footer>
  );
};