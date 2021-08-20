import React, {useState, useEffect} from 'react';
import Main from './components/Main';


function App() {
  const [councilsInfo, setCouncilsInfo] = useState(null);

  useEffect(() => {
  fetch("https://perioddignitydb-default-rtdb.europe-west1.firebasedatabase.app/.json")
  .then(result => result.json())
  .then(data => setCouncilsInfo(data))}, [] )

  if (councilsInfo) {
  return (
    <Main councilsInfo={councilsInfo}/>
  )
  };
  return (
    <h1>Loading...</h1>
  )
}

export default App;
