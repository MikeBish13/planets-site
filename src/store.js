import create from 'zustand';

export const useStore = create(set => ({
    planets: [],
    addPlanets: (items) => set(state => state.planets = items),
    currentPlanet: 'Mercury',
    setCurrentPlanet: (planet) => set(state => state.currentPlanet = planet)
}))