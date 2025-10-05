import React, { useRef } from 'react';
import '@google/model-viewer';

export default function ARModelViewer() {
  const modelRef = useRef();

  return (
    <model-viewer
      ref={modelRef}
      src="public/model/Sunflower Bouquet.glb"
      ios-src="public/model/Sunflower Bouquet.glb"
      alt="A 3D model"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      auto-rotate
      xr-environment
    />
  );
}
