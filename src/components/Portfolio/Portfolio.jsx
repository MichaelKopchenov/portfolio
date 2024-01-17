import { urlLink } from "../../utils/urlConstants";
import Container from "../Container/Container";
import ListOfProjects from "../ListOfProjects/ListOfProjects";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="Portfolio" className="portfolio__main">
      <Container>
        <h2 className="portfolio__title">Портфолио</h2>
        <nav className="portfolio__nav">
          <ul className="portfolio__ul">
            {urlLink.map((item) => (
              <ListOfProjects key={item.title} {...item} />
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
