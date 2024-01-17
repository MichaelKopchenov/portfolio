export default function Anchor({ way, title }) {
  return (
    <>
      <a href={way} className="navigation__link">
        {title}
      </a>
    </>
  );
}
