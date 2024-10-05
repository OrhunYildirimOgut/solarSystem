// src/components/PlanetOrbit.jsx
import React from 'react';
import ModelViewer from './ModelViewer';

const PlanetOrbit = ({ id, name, hasMoon, hasRing, isSun }) => {
  // Güneş için farklı model ve poster kaynakları kullanıyoruz
  const modelSrc = isSun ? '/models/sun.glb' : `/models/${id}.glb`;
  const posterSrc = isSun ? '/posters/sun-poster.webp' : `/posters/${id}-poster.webp`;

  const orbitClass = isSun ? 'sun' : `orbit ${hasRing ? 'ring' : ''}`;

  return (
    <div id={id} className={orbitClass}>
      <div className={`pos ${isSun ? 'no-rotate' : ''}`}>
        {isSun ? (
          <div className="sun-model">
            <ModelViewer 
              modelSrc={modelSrc} 
              posterSrc={posterSrc} 
              style={{ width: '12000%', height: '12000%', position: 'absolute' }} 
              autoRotate={false} /* Otomatik döndürmeyi kapat */
            />
          </div>
        ) : (
          <div className="planet">
            <ModelViewer 
              modelSrc={modelSrc} 
              posterSrc={posterSrc} 
              style={{ width: '100%', height: '100%' }} 
              autoRotate={true} /* Otomatik döndürmeyi açık bırak */
            />
            {hasMoon && (
              <ModelViewer 
                modelSrc="/models/moon.glb" 
                posterSrc="/posters/moon-poster.webp" 
                style={{ 
                  width: '30%', 
                  height: '30%', 
                  position: 'absolute', 
                  top: '70%', 
                  left: '70%' 
                }}
                autoRotate={true}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanetOrbit;
