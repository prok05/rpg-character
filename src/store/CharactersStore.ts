import { makeObservable, observable, action } from 'mobx';
import { ICharacter } from "../types";


class CharactersStore {
    characters: ICharacter[] = [];

    constructor() {
        makeObservable(this, {
            characters: observable,
            addCharacter: action
        })
    }

    addCharacter(data: ICharacter) {
        this.characters.push({
            ...data,
            parameters: [
                {
                    name: 'Жизненная сила',
                    level: 3 + data.attributes.strength
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
                    level: 0
                },
                {
                    name: 'Стелс',
                    level: 0
                },
                {
                    name: 'Стрельба из лука',
                    level: 0
                },
                {
                    name: 'Обучаемость',
                    level: 0
                },
                {
                    name: 'Выживание',
                    level: 0
                },
                {
                    name: 'Медицина',
                    level: 0
                },
                {
                    name: 'Запугивание',
                    level: 0
                },
                {
                    name: 'Проницательность',
                    level: 0
                },
                {
                    name: 'Внешник вид',
                    level: 0
                },
                {
                    name: 'Манипулирование',
                    level: 0
                },
            ]
        })
    }
}

export default new CharactersStore();