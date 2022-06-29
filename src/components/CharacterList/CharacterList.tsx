import CharactersStore from "../../store/CharactersStore";
import { Link } from 'react-router-dom';
import CharacterItem from "../CharacterItem/CharacterItem";
import s from './CharacterList.module.scss';

const CharacterList = () => {
    return (
        <ul className={s.characterList}>
            {CharactersStore.characters.map((el) => (
                <Link className={s.characterLink} key={el.id} to={el.id}>
                    <CharacterItem character={el} />
                </Link>
            ))}
        </ul>
    )
}

export default CharacterList;