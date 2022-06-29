import { Dispatch, SetStateAction } from "react";
import AttributeItem from "../AttributeItem/AttributeItem";
import s from './AttributeList.module.scss';

interface IAttributeListProps {
    strength: number,
    setStrength: Dispatch<SetStateAction<number>>
    agility: number,
    setAgility: Dispatch<SetStateAction<number>>
    intelligence: number,
    setIntelligence: Dispatch<SetStateAction<number>>
    charisma: number
    setCharisma: Dispatch<SetStateAction<number>>
}

const AttributeList = ({ strength, agility, intelligence, charisma, setStrength, setAgility, setIntelligence, setCharisma }: IAttributeListProps) => {
    return (
        <div>
            <ul className={s.attributeList}>
                <AttributeItem attr='Сила' lvl={strength} setAttr={setStrength} />
                <AttributeItem attr='Ловкость' lvl={agility} setAttr={setAgility} />
                <AttributeItem attr='Интеллект' lvl={intelligence} setAttr={setIntelligence} />
                <AttributeItem attr='Харизма' lvl={charisma} setAttr={setCharisma} />
            </ul>
        </div>
    )
}

export default AttributeList;