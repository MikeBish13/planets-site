import React, {useState, useEffect} from 'react'
import {useStore} from '../store'


export default function PlanetPage() {
    const {currentPlanet, planets} = useStore();
    const [displayPlanet, setDisplayPlanet] = useState('');
    const [currentView, setCurrentView] = useState('overview');

    useEffect(() => {
        const displayPlanetData = planets.filter(item => item.name === currentPlanet);
        setDisplayPlanet(displayPlanetData[0]);
        setCurrentView('overview');
    }, [currentPlanet, planets]);

    return (
        <div>
            {displayPlanet &&
            <div className="planet-section">
                <div className="planet-main-container">
                <div className="planet-section-img container">
                    {currentView === 'overview' && <img className={`main-img-${displayPlanet.name} main-img-overview-${displayPlanet.name}`} src={`.${displayPlanet.images.planet}`} alt="planet"></img>}
                    {currentView === 'structure' && <img className={`main-img-${displayPlanet.name} main-img-structure-${displayPlanet.name}`} src={`.${displayPlanet.images.internal}`} alt="planet structure"></img>}
                    {currentView === 'geology' && 
                    <div className="planet-section-img-geology-container">
                        <img className={`main-img-${displayPlanet.name} main-img-overview-${displayPlanet.name}`} src={`.${displayPlanet.images.planet}`} alt="planet"></img>
                        <img className={`main-img-${displayPlanet.name} main-img-geology`}src={`.${displayPlanet.images.geology}`} alt="planet geology"></img>
                    </div>
                }
                </div>
                
                <div className="planet-section-top container">
                    <div className="planet-section-top-details">
                        <h1>{displayPlanet.name}</h1>
                        <p className="main-para">{displayPlanet[currentView].content}</p>
                        <p className="link">Source: <a href={displayPlanet[currentView].source}>Wikipedia<img src="../assets/icon-source.svg" alt="source icon"></img></a></p>
                    </div>
                    <div className="planet-section-top-buttons">
                        <h3 className={`btn btn-${displayPlanet.name}`} id={currentView === 'overview' && `btn-${displayPlanet.name}-active`} onClick={() => setCurrentView('overview')}><span>01</span> Overview</h3>
                        <h3 className={`btn btn-${displayPlanet.name} btn-structure`} id={currentView === 'structure' && `btn-${displayPlanet.name}-active`}onClick={() => setCurrentView('structure')}><span>02</span></h3>
                         <h3 className={`btn btn-${displayPlanet.name} btn-geology`} id={currentView === 'geology' && `btn-${displayPlanet.name}-active`} onClick={() => setCurrentView('geology')}><span>03</span></h3>
                    </div>
                </div>
                </div>
            
            <div className="planet-section-bottom container">
                <div className="planet-section-bottom-box">
                    <h4>Rotation Time</h4>
                    <h2>{displayPlanet.rotation}</h2>
                </div>
                <div className="planet-section-bottom-box">
                    <h4>Revolution Time</h4>
                    <h2>{displayPlanet.revolution}</h2>
                </div>
                <div className="planet-section-bottom-box">
                    <h4>Radius</h4>
                    <h2>{displayPlanet.radius}</h2>
                </div>
                <div className="planet-section-bottom-box">
                    <h4>Average Temp.</h4>
                    <h2>{displayPlanet.temperature}</h2>
                </div>
            </div>
            </div>
            }
        </div>
    )
}
