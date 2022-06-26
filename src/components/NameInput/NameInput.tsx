import { Dispatch, SetStateAction } from "react";

interface INameInputProps {
    setName: Dispatch<SetStateAction<string>>,
    value: string
}

const NameInput = ({ setName, value }: INameInputProps) => {
    return (
        <div>
            <input
                onChange={(v) => setName(v.target.value)}
                value={value}
                type="text"
                name="name"
                placeholder="Имя" />
        </div>
    )
}

export default NameInput;