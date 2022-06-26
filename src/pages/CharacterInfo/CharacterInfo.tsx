import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import CharactersStore from '../../store/CharactersStore';
import { ICharacter, IParameter, ISkill } from '../../types';

const CharacterInfo = observer(() => {
    const { id } = useParams();
    const character: any = toJS(CharactersStore.characters.find((el) => el.id === id));
    console.log(character)
    return (
        <main>
            {character.name}
            Навыки
            <ul>
                {character.skills.map((skill: ISkill) => (
                    <li>
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                    </li>

                ))}
            </ul>
            <ul>
                {character.parameters.map((param: IParameter) => (
                    <li>
                        {param.name}
                        {param.level}
                    </li>
                ))}
            </ul>
        </main>
    )
})

export default CharacterInfo;