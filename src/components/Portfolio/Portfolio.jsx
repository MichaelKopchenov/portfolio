import { urlLink } from '../../utils/urlConstants';
import Container from '../Container/Container';
import ListOfProjects from '../ListOfProjects/ListOfProjects';
import './Portfolio.css';
  
export default function Portfolio() {
  return (
    <section id='Portfolio' className='portfolio__main'>
      <Container>
        <h2 className='portfolio__title'>
          Портфолио
        </h2>
        <nav className="portfolio__nav">
          <ul className='portfolio__ul'>
            <ListOfProjects {...urlLink[0]} />
            <ListOfProjects {...urlLink[1]} />
            <ListOfProjects {...urlLink[2]} />
            <ListOfProjects {...urlLink[3]} />
            <ListOfProjects {...urlLink[4]} />
          </ul>
        </nav>
      </Container>
    </section>
  );
};