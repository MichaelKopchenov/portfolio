export default function ListOfProjects({ title, way }) {
  return (
    <li className="portfolio__list">
      <a
        href={way}
        target="_blank"
        className="portfolio__link"
        rel="noreferrer"
      >
        <p className="portfolio__subtitle">{title}</p>
        <button type="button" className="portfolio__btn" />
      </a>
    </li>
  );
}
