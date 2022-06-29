import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DownloadLink from '../../components/DownloadLink/DownloadLink';
import CharactersStore from '../../store/CharactersStore';
import { IParameter, ISkill } from '../../types';
import s from './CharacterInfo.module.scss';

const CharacterInfo = observer(() => {
    const { id } = useParams<string>();
    const character = CharactersStore.getCharacterById(id);
    const skillLevels = ['Нетренированный', 'Новичок', 'Ученик', 'Адепт', 'Эксперт', 'Мастер'];
    const [newName, setNewName] = useState<string | undefined>(character?.name);
    const [isNameChange, setIsNameChange] = useState<boolean>(false);
    return (
        <main>
            <div className="container">
                <div className="content">
                    <div className={s.characterInfo}>

                        <div className={[s.characterSection, s.characterMain].join(' ')}>
                            <h3 className={s.characterName}>{character?.name}</h3>
                            <div className={s.characterChangeName}>
                                {!isNameChange &&
                                    <button
                                        className={s.button}
                                        onClick={() => setIsNameChange(!isNameChange)}>Изменить имя</button>}
                                {isNameChange &&
                                    <p>
                                        <input
                                            onChange={(v) => setNewName(v.target.value)}
                                            type="text"
                                            placeholder='Новое имя'
                                            value={newName}
                                        />
                                        <button
                                            className={s.button}
                                            onClick={() => setIsNameChange(!isNameChange)}>X</button>
                                        <button
                                            className={s.button}
                                            onClick={() => {
                                                CharactersStore.changeName(newName, id)
                                                setIsNameChange(!isNameChange)
                                            }
                                            }>OK</button>
                                    </p>}
                            </div>

                            <div className={s.characterImg}></div>

                            <div className={[s.characterSection, s.characterParams].join(' ')}>
                                <ul className={s.sectionList}>
                                    {character?.parameters?.map((param: IParameter) => (
                                        <li className={s.sectionList__item} key={param.name}>
                                            <span>{param.name}</span>
                                            <span className={s.level}>
                                                {param.level}
                                                {param.name === 'Жизненная сила' &&
                                                    <span>/{param.maxLevel}</span>}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={s.characterDownload}>
                                <button className={s.button} onClick={() => CharactersStore.takeDamage(id)}>Получить урон</button>
                                <DownloadLink character={character} />
                            </div>
                        </div>

                        <div>
                            <div className={[s.characterSection, s.characterAttributes].join(' ')}>
                                <h3 className={s.sectionTitle}>Атрибуты</h3>
                                <ul className={s.sectionList}>
                                    <li className={s.sectionList__item}>
                                        <span>Сила</span>
                                        <p>
                                            <span className={s.level}>{character?.attributes.strength}</span>
                                            <button className={s.levelUp}
                                                onClick={() => CharactersStore.levelAttribute(id, 'Сила')}>
                                                +
                                            </button>
                                        </p>
                                    </li>
                                    <li className={s.sectionList__item}>
                                        <span>Ловкость</span>
                                        <p>
                                            <span className={s.level}>{character?.attributes.agility}</span>
                                            <button
                                                className={s.levelUp}
                                                onClick={() => CharactersStore.levelAttribute(id, 'Ловкость')}>
                                                +
                                            </button>
                                        </p>
                                    </li>
                                    <li className={s.sectionList__item}>
                                        <span>Интеллект</span>
                                        <p>
                                            <span className={s.level}>{character?.attributes.intelligence}</span>
                                            <button
                                                className={s.levelUp}
                                                onClick={() => CharactersStore.levelAttribute(id, 'Интеллект')}>
                                                +
                                            </button>
                                        </p>
                                    </li>
                                    <li className={s.sectionList__item}>
                                        <span>Харизма</span>
                                        <p>
                                            <span className={s.level}>{character?.attributes.charisma}</span>
                                            <button className={s.levelUp}
                                                onClick={() => CharactersStore.levelAttribute(id, 'Харизма')}>
                                                +
                                            </button>
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className={[s.characterSection, s.characterSkills].join(' ')}>
                                <h3 className={s.sectionTitle}>Навыки</h3>
                                <ul className={s.sectionList}>
                                    {character?.skills?.map((skill: ISkill) => (
                                        <li className={s.sectionList__item} key={skill.name}>
                                            <span>{skill.name} </span>
                                            <p>
                                                <span>Уровень: {skill.level}</span>
                                                <button className={s.levelUp}
                                                    onClick={() => CharactersStore.levelSkill(id, skill.name)}>
                                                    +
                                                </button>
                                            </p>
                                            <span>{skillLevels[skill.level]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    )
})

export default CharacterInfo;