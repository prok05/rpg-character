import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import CharactersStore from '../../store/CharactersStore';
import { ICharacter } from '../../types';
import AttributeList from '../AttributeList/AttributeList';
import NameInput from '../NameInput/NameInput';
import s from './CreateForm.module.scss';

const CreateForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<number>(0);
    const formSteps: string[] = ['Придумайте имя', 'Задайте атрибуты'];

    const [name, setName] = useState<string>('');
    const [strength, setStrength] = useState<number>(0);
    const [agility, setAgility] = useState<number>(0);
    const [intelligence, setIntelligence] = useState<number>(0);
    const [charisma, setCharisma] = useState<number>(0);

    const formDisplay = () => {
        if (step === 0) return <NameInput setName={setName} value={name} />
        if (step === 1) return <AttributeList
            strength={strength}
            setStrength={setStrength}
            setAgility={setAgility}
            setIntelligence={setIntelligence}
            setCharisma={setCharisma}
            agility={agility}
            intelligence={intelligence}
            charisma={charisma}
        />
    }

    const handleSubmit = () => {
        const newCharacter: ICharacter = {
            id: uuidv4(),
            name: name,
            attributes: {
                strength: strength,
                agility: agility,
                intelligence: intelligence,
                charisma: charisma
            },
        }
        CharactersStore.addCharacter(newCharacter);
        navigate('/')
    }

    return (
        <div className={s.form}>
            <div className={s.progressbar}></div>
            <div className={s.formContainer}>
                <h1>{formSteps[step]}</h1>

                <div className={s.formBody}>
                    {formDisplay()}
                </div>

                <div className={s.formBtns}>
                    <button
                        disabled={step === 0}
                        onClick={() => setStep(prev => prev - 1)}>Назад
                    </button>
                    <button
                        disabled={step === formSteps.length - 1}
                        onClick={() => setStep(prev => prev + 1)}>Далее
                    </button>
                    <button onClick={handleSubmit}>Поглядеть</button>
                </div>
            </div>
        </div>
    )
}

export default CreateForm;