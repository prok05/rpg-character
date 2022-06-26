import CharactersStore from "../../store/CharactersStore";
import { Link } from 'react-router-dom';
import CharacterItem from "../CharacterItem/CharacterItem";

const CharacterList = () => {
    return (
        <ul>
            {CharactersStore.characters.map((el) => (
                <Link key={el.id} to={el.id}>
                    <CharacterItem character={el} />
                </Link>
            ))}
            <Link to='/create'>Создать</Link>
        </ul>
    )
}

export default CharacterList;