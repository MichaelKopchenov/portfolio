export default function Anchor({ way, title }) {
  return (
    <>
      <a href={way} className="header__link">
        {title}
      </a>
    </>
  );
}
