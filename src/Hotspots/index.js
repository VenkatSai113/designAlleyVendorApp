import React, { useRef, useState } from 'react';
import 'aframe';

function HotspotCreator() {
  const [hotspots, setHotspots] = useState([]);
  const cameraRef = useRef(null);

  const handleAddHotspot = () => {
    const intersection = cameraRef.current.components.raycaster.intersectedEl;
    if (intersection) {
      const hotspotPosition = intersection.point;
      const newHotspot = (
        <a-entity
          key={hotspots.length}
          geometry="primitive: circle; radius: 0.5"
          material="color: red; opacity: 0.5"
          position={hotspotPosition}
        ></a-entity>
      );
      setHotspots([...hotspots, newHotspot]);
    }
  };

  return (
    <>
      <button onClick={handleAddHotspot}>Add Hotspot</button>
      {hotspots}
    </>
  );
}

function App() {
  return (
    <a-scene>
      <a-entity>
        <a-camera >
          <a-cursor raycaster="objects: [data-raycastable]"></a-cursor>
        </a-camera>
      </a-entity>
      <HotspotCreator />
    </a-scene>
  );
}

export default App;