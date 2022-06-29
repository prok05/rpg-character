import s from './NoCharacter.module.scss';

const NoCharacters = () => {
    return (
        <section className={s.noCharacter}>
            <h1 className={s.noCharacter__title}>У Вас нет ни одного персонажа.</h1>
            <p>Вы можете создать нового или импортировать уже созданного.</p>
        </section>
    )
}

export default NoCharacters;