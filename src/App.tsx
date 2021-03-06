import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import CharacterInfo from './pages/CharacterInfo/CharacterInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/rpg-character' element={<Home />} />
          <Route path='/rpg-character/create' element={<Create />} />
          <Route path='/rpg-character/:id' element={<CharacterInfo />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
