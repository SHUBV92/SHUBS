import { Suspense, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';

import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile, modelSelector }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const car = useGLTF('./bmw_m3_e30_vr_ready/scene.gltf');

  const modelList = [
    { name: computer, desktopScale: 0.75 },
    { name: car, desktopScale: 1.75 },
  ];

  // Inside your ComputersCanvas component
  const { gl } = useThree();

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
    };

    gl.domElement.addEventListener(
      'webglcontextlost',
      handleContextLost,
      false
    );

    return () => {
      gl.domElement.removeEventListener(
        'webglcontextlost',
        handleContextLost,
        false
      );
    };
  }, [gl]);

  const object = modelList[modelSelector];

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <SpotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={object.name.scene}
        scale={isMobile ? 0.7 : object.desktopScale}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({ modelSelector }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Update and check if the size of the window is for a mobile
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile state variable`
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }}
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} modelSelector={modelSelector} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
