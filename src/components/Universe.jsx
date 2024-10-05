// src/components/Universe.jsx
import React from 'react';
import PlanetOrbit from './PlanetOrbit';
// Sun importunu kaldırdık

function Universe({ activePlanet }) {
  const planets = [
    { id: 'sun', name: 'Sun', isSun: true }, // Güneş ekledik
    { id: 'mercury', name: 'Mercury' },
    { id: 'venus', name: 'Venus' },
    { id: 'earth', name: 'Earth', hasMoon: true },
    { id: 'mars', name: 'Mars' },
    { id: 'jupiter', name: 'Jupiter' },
    { id: 'saturn', name: 'Saturn', hasRing: true },
    { id: 'uranus', name: 'Uranus' },
    { id: 'neptune', name: 'Neptune' },
    { id: 'pluto', name: 'Pluto' }, // Plüton'u dahil etmek için
  ];

  return (
    <div id="universe" className="scale-stretched">
      <div id="galaxy">
        <div id="solar-system" className={activePlanet}>
          {planets.map((planet) => (
            <PlanetOrbit
              key={planet.id}
              id={planet.id}
              name={planet.name}
              hasMoon={planet.hasMoon}
              hasRing={planet.hasRing}
              isSun={planet.isSun}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Universe;
