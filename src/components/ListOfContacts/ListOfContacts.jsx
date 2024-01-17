export default function ListOfContacts ({ 
    title, 
    way, 
    icon, 
    desc 
}) {
    return (
        <li className='contacts__list'>
            <a
                href={way}
                target='_blank'
                className='contacts__link'
                rel="noreferrer"
            >
                <p className='contacts__subtitle'>
                {title} <img 
                            className='contacts__icon' 
                            src={icon} 
                            alt={desc} 
                        />
                </p>
                <button type='button' className='contacts__btn' />
            </a>
        </li>
    );
};