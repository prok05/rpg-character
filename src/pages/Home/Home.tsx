import { observer } from "mobx-react-lite";
import CharacterList from "../../components/CharacterList/CharacterList";
import NoCharacters from "../../components/NoCharacters/NoCharacters";
import CharactersStore from "../../store/CharactersStore";

const Home = observer(() => {
    return (
        <main>
            <div className="container">
                <div className="content">
                    {CharactersStore.characters.length ? <CharacterList /> : <NoCharacters />}
                </div>
            </div>
        </main>
    )
})

export default Home;