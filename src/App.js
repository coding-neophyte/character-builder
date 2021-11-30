import './App.css';
import Picker from './Components/Picker';
import Character from './Components/Character';
import { useState } from 'react'

function App() {
  const [head, setHead] = useState('duck')
  const [torso, setTorso] = useState('blue')
  const [legs, setLegs] = useState('baggy')
  const [catchPhrase, setCatchPhrases] = useState('')

  const handleClick = () => {
    setCatchPhrases((prevState) => [...prevState, catchPhrase]);

  };
  return (
    <div>
        <Picker head={head} onHeadChange={setHead} torso={torso} onTorsoChange={setTorso} legs={legs} onLegsChange={setLegs} catchPhrase={catchPhrase} addCatchPhrase={setCatchPhrases} handleClick={handleClick} />
        <Character  />
    </div>
  );
}

export default App;
//
