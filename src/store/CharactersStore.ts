import { makeObservable, observable, action } from 'mobx';
import { EAttribute, ICharacter } from "../types";


class CharactersStore {
    characters: ICharacter[] = [];

    constructor() {
        makeObservable(this, {
            characters: observable,
            addCharacter: action,
            levelAttribute: action,
            levelSkill: action,
            changeName: action,
            importCharacter: action
        })
    }

    getCharacterById(id: string | undefined) {
        return this.characters.find((el) => el.id === id);
    }

    levelAttribute(id: string | undefined, attr: string) {
        const character = this.getCharacterById(id);
        if (character && character.parameters) {
            if (attr === 'Сила' && character.parameters[0].maxLevel) {
                character.attributes.strength += 1;
                character.parameters[0].level += 1;
                character.parameters[0].maxLevel += 1;
            };
            if (attr === 'Ловкость') {
                character.attributes.agility += 1;
                character.parameters[1].level += 1;
                character.parameters[2].level += 1;
            };
            if (attr === 'Интеллект') {
                character.attributes.intelligence += 1;
                character.parameters[2].level += 1;
            };
            if (attr === 'Харизма') character.attributes.charisma += 1;
        }
    }

    levelSkill(id: string | undefined, skill: string) {
        const character = this.getCharacterById(id);
        const currentSkill = character?.skills?.find(sk => sk.name === skill);
        if (character && currentSkill && currentSkill.level < 5) {
            if (currentSkill.mainAttribute === EAttribute.STRENGTH && currentSkill.level < character.attributes.strength) currentSkill.level += 1;
            if (currentSkill.mainAttribute === EAttribute.AGILITY && currentSkill.level < character.attributes.agility) currentSkill.level += 1;
            if (currentSkill.mainAttribute === EAttribute.INTELLIGENCE && currentSkill.level < character.attributes.intelligence) currentSkill.level += 1;
            if (currentSkill.mainAttribute === EAttribute.CHARISMA && currentSkill.level < character.attributes.charisma) currentSkill.level += 1;
        }
    }

    takeDamage(id: string | undefined) {
        const character = this.getCharacterById(id);
        const hp = character?.parameters?.find(param => param.name === 'Жизненная сила');
        if (character && hp && hp.level > 0) {
            hp.level -= 1;
        }
    }

    changeName(name: string | undefined, id: string | undefined) {
        const character = this.getCharacterById(id);
        if (character) {
            character.name = name;
        }
    }

    importCharacter(character: ICharacter) {
        this.characters.push(character);
    }

    addCharacter(data: ICharacter) {
        this.characters.push({
            ...data,
            parameters: [
                {
                    name: 'Жизненная сила',
                    level: 3 + data.attributes.strength,
                    maxLevel: 3 + data.attributes.strength
                },
                {
                    name: 'Уклонение',
                    level: 10 + data.attributes.agility
                },
                {
                    name: 'Энергичность',
                    level: data.attributes.agility + data.attributes.intelligence
                },
            ],
            skills: [
                {
                    name: 'Атака',
                    level: 0,
                    mainAttribute: EAttribute.STRENGTH
                },
                {
                    name: 'Стелс',
                    level: 0,
                    mainAttribute: EAttribute.AGILITY
                },
                {
                    name: 'Стрельба из лука',
                    level: 0,
                    mainAttribute: EAttribute.AGILITY
                },
                {
                    name: 'Обучаемость',
                    level: 0,
                    mainAttribute: EAttribute.INTELLIGENCE

                },
                {
                    name: 'Выживание',
                    level: 0,
                    mainAttribute: EAttribute.INTELLIGENCE
                },
                {
                    name: 'Медицина',
                    level: 0,
                    mainAttribute: EAttribute.INTELLIGENCE
                },
                {
                    name: 'Запугивание',
                    level: 0,
                    mainAttribute: EAttribute.CHARISMA
                },
                {
                    name: 'Проницательность',
                    level: 0,
                    mainAttribute: EAttribute.CHARISMA
                },
                {
                    name: 'Внешник вид',
                    level: 0,
                    mainAttribute: EAttribute.CHARISMA
                },
                {
                    name: 'Манипулирование',
                    level: 0,
                    mainAttribute: EAttribute.CHARISMA
                },
            ]
        })
    }
}

export default new CharactersStore();