// src/components/ModelViewer.jsx
import React from 'react';
import '@google/model-viewer';
import '../assets/css/ModelViewer.css'; 

const ModelViewer = ({ modelSrc, posterSrc, style, autoRotate }) => {
  const handleError = (event) => {
    console.error(`Error loading model: ${modelSrc}`, event);
  };

  const handleLoad = () => {
    console.log(`Model loaded successfully: ${modelSrc}`);
  };

  return (
    <model-viewer
      src={modelSrc}
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      tone-mapping="linear"
      shadow-intensity="1"
      auto-rotate={autoRotate}
      disable-tap
      poster={posterSrc}
      style={style}
      onError={handleError}
      onLoad={handleLoad}
    >
      <div className="progress-bar hide" slot="progress-bar">
        <div className="update-bar"></div>
      </div>
      <button slot="ar-button"></button>
    </model-viewer>
  );
};

export default ModelViewer;
