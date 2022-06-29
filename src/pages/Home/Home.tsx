import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import CharacterList from "../../components/CharacterList/CharacterList";
import NoCharacters from "../../components/NoCharacters/NoCharacters";
import UploadCharacter from "../../components/UploadCharacter/UploadCharacter";
import CharactersStore from "../../store/CharactersStore";
import s from './Home.module.scss';

const Home = observer(() => {
    return (
        <main>
            <div className="container">
                <div className="content">
                    {CharactersStore.characters.length ? <CharacterList /> : <NoCharacters />}

                    <div className={s.create}>
                        <Link className={s.createBtn} to='/create'>Cоздать</Link>
                        <span>|</span>
                        <UploadCharacter />
                    </div>
                </div>
            </div>
        </main>
    )
})

export default Home;