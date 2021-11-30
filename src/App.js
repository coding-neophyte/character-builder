import './App.css';
import Picker from './Components/Picker/Picker';
import Character from './Components/Character/Character';
import { useState } from 'react'
import Display from './Components/Display/Display';

function App() {
  const [head, setHead] = useState('beanie')
  const [torso, setTorso] = useState('cardigan')
  const [legs, setLegs] = useState('baggy')
  const [catchPhrase, setCatchPhrase] = useState('')
  const [phraseList, setPhraseList] = useState([])

  const handleClick = () => {
    setPhraseList((prevState) => [...prevState, catchPhrase])
    setCatchPhrase('')

  };
  return (
    <div>
        <Picker head={head} onHeadChange={setHead} torso={torso} onTorsoChange={setTorso} legs={legs} onLegsChange={setLegs} catchPhrase={catchPhrase} setCatchPhrase={setCatchPhrase} handleClick={handleClick} />
        <Character  head={head} torso={torso} legs={legs} />
        <Display catchPhrases={phraseList} />
    </div>
  );
}

export default App;
//
