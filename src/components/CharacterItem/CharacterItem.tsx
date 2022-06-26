import { ICharacter } from "../../types";
import icon from '../../assets/svg/char-icon.svg';
import s from './CharacterItem.module.scss';

interface ICharacterItem {
    character: ICharacter
}

const CharacterItem = ({ character }: ICharacterItem) => {
    return (
        <li className={s.characterItem}>
            <img src={icon} alt="Аватар" width='50' height='50' />
            <span>{character.name}</span>
        </li>
    )
}

export default CharacterItem;