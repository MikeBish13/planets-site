import React from "react";
import { useStore } from "../store";

export default function Header() {
  const { planets, setCurrentPlanet } = useStore();

  const displayNavbar = () => {
    document.querySelector('.navbar').classList.toggle('navbar-active');
  }
  const selectPlanet = (planet) => {
    setCurrentPlanet(planet);
    document.querySelector('.navbar').classList.toggle('navbar-active');
  }

  return (
    <header>
      <div className="header-container">
        <p className="logo">The Planets</p>
        <nav className="navbar">
          <ul>
          {planets.map((item, index) => (
            <li className={`nav-item-${item.name}`}onClick={() => selectPlanet(item.name)}key={index}>
              <div className={`planet-dot planet-dot-${item.name}`}></div>
              <h4>{item.name}</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </li>
          ))}
          </ul>
        </nav>
        <svg onClick={displayNavbar} className="hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" /></g></svg>
      </div>
    </header>
  );
}
