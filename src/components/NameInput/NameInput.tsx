import { Dispatch, SetStateAction } from "react";
import s from './NameInput.module.scss';

interface INameInputProps {
    setName: Dispatch<SetStateAction<string>>,
    value: string
}

const NameInput = ({ setName, value }: INameInputProps) => {
    return (
        <div>
            <input
                className={s.nameInput}
                onChange={(v) => setName(v.target.value)}
                value={value}
                type="text"
                name="name"
                placeholder="Имя" />
        </div>
    )
}

export default NameInput;