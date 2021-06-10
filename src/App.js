import './styles/main.css'
import Header from './components/Header'
import PlanetPage from './components/PlanetPage'
import {useEffect} from 'react'
import {useStore} from './store'


function App() {
  const {addPlanets} = useStore();
  
  useEffect(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => addPlanets(data));
  }, [addPlanets])

  return (
    <div className="App" style={{ backgroundImage: "url(/assets/background-stars.svg)" }}>
      <Header />
      <PlanetPage />
    </div>
  );
}

export default App;
