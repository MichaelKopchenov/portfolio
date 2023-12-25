import Anchor from '../Anchor/Anchor';
import { anchors } from '../../utils/arraysList';
import './Navigation.css';

export default function Navigtion() {
    return (
        <section id='Navigation' className='navigation'>
        <nav className='navigation__container'>
            <Anchor {...anchors[0]}/>
            <Anchor {...anchors[1]}/>
            <Anchor {...anchors[2]}/>
        </nav>
      </section>
    )
}