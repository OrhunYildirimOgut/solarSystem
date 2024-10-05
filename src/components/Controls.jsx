// src/components/Controls.jsx
import React from 'react';

function Controls({
  view3D,
  zoomLarge,
  scale,
  onToggleView,
  onToggleZoom,
  onSetScale,
}) {
  return (
    <div id="controls">
      <label className="set-view">
        <input
          type="checkbox"
          checked={view3D}
          onChange={onToggleView}
        />
        <span>3D Görünüm</span>
      </label>
      <label className="set-zoom">
        <input
          type="checkbox"
          checked={zoomLarge}
          onChange={onToggleZoom}
        />
        <span>Büyük Zoom</span>
      </label>
      <label>
        <input
          type="checkbox"
          className="set-speed"
          name="scale-speed"
          checked={scale.speed}
          onChange={() => onSetScale('speed')}
        />
        <span>Speed</span>
      </label>
      <label>
        <input
          type="checkbox"
          className="set-size"
          name="scale-size"
          checked={scale.size}
          onChange={() => onSetScale('size')}
        />
        <span>Size</span>
      </label>
      <label>
        <input
          type="checkbox"
          className="set-distance"
          name="scale-distance"
          checked={scale.distance}
          onChange={() => onSetScale('distance')}
        />
        <span>Distance</span>
      </label>
    </div>
  );
}

export default Controls;
