export interface IAttributes {
    strength: number,
    agility: number,
    intelligence: number,
    charisma: number
}

export interface ISkill {
    name: string,
    level: number
}

export interface IParameter {
    name: string,
    level: number
}

export interface ICharacter {
    id: string,
    name: string,
    attributes: IAttributes,
    parameters?: IParameter[]
    skills?: ISkill[]
}