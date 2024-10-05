// src/App.jsx
import React, { useState, useEffect } from 'react';
import './assets/css/basics.css';
import './assets/css/data.css';
import './assets/css/legends.css';
import './assets/css/lighting.css';
import './assets/css/responsive.css';
import './assets/css/transitions.css';
import './assets/css/ui.css';
import './assets/css/views.css';
import Navbar from './components/Navbar';
import DataPanel from './components/DataPanel';
import Controls from './components/Controls';
import Universe from './components/Universe';

function App() {
  const [view3D, setView3D] = useState(true);  // Başlangıçta true
  const [zoomLarge, setZoomLarge] = useState(true);  // Başlangıçta true
  const [scale, setScale] = useState({
    speed: true,
    size: true,
    distance: true,
  });
  const [dataOpen, setDataOpen] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);
  const [activePlanet, setActivePlanet] = useState('earth');

  useEffect(() => {
    const body = document.body;
    body.classList.remove('view-2D', 'opening');
    body.classList.add('view-3D');  // Başlangıçta 3D görünüm etkin

    const timer = setTimeout(() => {
      body.classList.remove('hide-UI');
      // Çoklu ölçek desteklediğimiz için set-speed yerine scale durumuna bağlı olarak sınıfları ekle
      if (scale.speed) body.classList.add('set-speed');
      if (scale.size) body.classList.add('set-size');
      if (scale.distance) body.classList.add('set-distance');
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // scale bağımlılığı eklemedik çünkü ilk yüklemede çalışması yeterli

  const toggleData = (e) => {
    e.preventDefault();
    setDataOpen((prev) => !prev);
  };

  const toggleControls = (e) => {
    e.preventDefault();
    setControlsOpen((prev) => !prev);
  };

  const handleSelectPlanet = (planet) => {
    setActivePlanet(planet);
  };

  const handleToggleView = () => {
    setView3D((prev) => !prev);
  };

  const handleToggleZoom = () => {
    setZoomLarge((prev) => !prev);
  };

  const handleSetScale = (scaleName) => {
    setScale((prev) => ({
      ...prev,
      [scaleName]: !prev[scaleName],
    }));
  };

  // Güncellenen sınıfları body üzerinde yönetmek
  useEffect(() => {
    const body = document.body;

    // Data panel sınıfları
    if (dataOpen) {
      body.classList.add('data-open');
      body.classList.remove('data-close');
    } else {
      body.classList.add('data-close');
      body.classList.remove('data-open');
    }

    // Controls panel sınıfları
    if (controlsOpen) {
      body.classList.add('controls-open');
      body.classList.remove('controls-close');
    } else {
      body.classList.add('controls-close');
      body.classList.remove('controls-open');
    }
  }, [dataOpen, controlsOpen]);

  // View ve Zoom sınıfları
  useEffect(() => {
    const body = document.body;

    // View
    if (view3D) {
      body.classList.add('view-3D');
      body.classList.remove('view-2D');
    } else {
      body.classList.add('view-2D');
      body.classList.remove('view-3D');
    }

    // Zoom
    if (zoomLarge) {
      body.classList.add('zoom-large');
      body.classList.remove('zoom-close');
    } else {
      body.classList.add('zoom-close');
      body.classList.remove('zoom-large');
    }
  }, [view3D, zoomLarge]);

  // Scale sınıfları
  useEffect(() => {
    const universe = document.getElementById('universe');
    if (!universe) return;

    universe.classList.remove(
      'scale-stretched',
      'scale-s',
      'scale-d',
      'set-speed',
      'set-size',
      'set-distance'
    );

    if (scale.speed) {
      universe.classList.add('scale-stretched', 'set-speed');
    }
    if (scale.size) {
      universe.classList.add('scale-s', 'set-size');
    }
    if (scale.distance) {
      universe.classList.add('scale-d', 'set-distance');
    }
  }, [scale]);

  return (
    <>
      <Navbar onToggleData={toggleData} onToggleControls={toggleControls} />
      <DataPanel activePlanet={activePlanet} onSelectPlanet={handleSelectPlanet} />
      <Controls
        view3D={view3D}
        zoomLarge={zoomLarge}
        scale={scale}
        onToggleView={handleToggleView}
        onToggleZoom={handleToggleZoom}
        onSetScale={handleSetScale}
      />
      <Universe activePlanet={activePlanet} />
    </>
  );
}

export default App;
