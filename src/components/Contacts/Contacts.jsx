import Telephone  from '../../images/telephone.png';
import Container from '../Container/Container';
import ListOfContacts from '../ListOfContacts/ListOfContacts';
import { contactsList } from '../../utils/contactsList';
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
              <ListOfContacts {...contactsList[0]} />
              <ListOfContacts {...contactsList[1]} />
              <ListOfContacts {...contactsList[2]} />
              <ListOfContacts {...contactsList[3]} />
            </ul>
            <img 
              className='contacts__image' 
              src={Telephone} 
              alt="Картинка телефона" 
            />
          </nav>
        </Container>
      </section>
    );
  };