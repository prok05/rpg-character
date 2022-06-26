import { Dispatch, SetStateAction } from 'react';
import s from './AttributeItem.module.scss';

interface IAttributeProps {
    attr: string,
    lvl: number,
    setAttr: Dispatch<SetStateAction<number>>
}

const Attribute = ({ attr, lvl, setAttr }: IAttributeProps) => {
    const increment = () => {
        setAttr(prev => prev + 1)
    }
    const decrement = () => {
        if (lvl > 0) setAttr(prev => prev - 1)
    }

    return (
        <li className={s.attributeItem}>
            <span className={s.attributeName}>
                {attr}
            </span>
            <button
                onClick={decrement}
                className={s.attributeBtn}>
                -
            </button>
            <span className={s.attributeLvl}>
                {lvl}
            </span>
            <button
                onClick={increment}
                className={s.attributeBtn}>
                +
            </button>
        </li>
    )
}

export default Attribute;