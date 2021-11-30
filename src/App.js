import './App.css';
import Picker from './Components/Picker';
import Character from './Components/Character';
import { useState } from 'react'

function App() {
  const [head, setHead] = useState()
  const [torso, setTorso] = useState()
  const [legs, setLegs] = useState()
  const [catchPhrase, setCatchPhrases] = useState()

  return (
    <div>
        <Picker head={head} onHeadChange={setHead} torso={torso} onTorsoChange={setTorso} legs={legs} onLegsChange={setLegs} catchPhrase={catchPhrase} addCatchPhrase={setCatchPhrases} />
        <Character  />
    </div>
  );
}

export default App;
//
