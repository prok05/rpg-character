import { Link } from 'react-router-dom';

import s from './NoCharacter.module.scss';

const NoCharacters = () => {
    return (
        <section className={s.noCharacter}>
            <h1 className={s.noCharacter__title}>У Вас нет ни одного персонажа</h1>
            <p className={s.noCharacter__create}>
                Хотите {<Link className={s.createBtn} to='/create'>создать?</Link>}
            </p>
        </section>
    )
}

export default NoCharacters;