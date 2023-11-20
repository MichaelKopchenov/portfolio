import './Header.css';

export default function Header() {
  return (
    <section className="header__main">
      <div className="header__about">
        <h1 className="header__title">
          Портфолио Веб-разработчика<br /> Копченова Михаила Викторовича.
        </h1>
        <p className="header__subtitle">
          Листайте ниже, чтобы узнать больше про мои работы и меня.
        </p>
        <a href='#aboutProject' className="header__link">
          Узнать больше
        </a>
      </div>
      <div className="header__logo" />
    </section>
  );
};