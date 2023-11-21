import './Navigation.css';

export default function Navigtion() {
    return (
        <section id='Navigation' className='navigation'>
        <nav className='navigation__container'>
            <a href='#AboutMe' className='navigation__link'>
                Обо мне
            </a>
            <a href='#Portfolio' className='navigation__link'>
                Мои работы
            </a>
            <a href='#Contacts' className='navigation__link'>
                Контакты
            </a>
      </nav>
      </section>
    )
}