export interface IAttributes {
    strength: number,
    agility: number,
    intelligence: number,
    charisma: number
}
export enum EAttribute {
    STRENGTH = 'Сила',
    AGILITY = 'Ловкость',
    INTELLIGENCE = 'Интеллект',
    CHARISMA = 'Харизма'
}

export interface ISkill {
    name: string,
    level: number,
    mainAttribute: EAttribute
}

export interface IParameter {
    name: string,
    level: number,
    maxLevel?: number,
}

export interface ICharacter {
    id: string,
    name: string | undefined,
    attributes: IAttributes,
    parameters?: IParameter[]
    skills?: ISkill[]
}