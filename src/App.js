import * as Three from "three";
import { useEffect, useRef } from 'react';

function App() {
  const  { 
    Scene, 
    PerspectiveCamera, 
    WebGLRenderer, 
    BoxGeometry, 
    MeshBasicMaterial,
    Mesh 
  } = Three;

  const mount = useRef(null);

  useEffect(() => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild( renderer.domElement );
    
    let geometry = new BoxGeometry(1, 1, 1);
    let material = new MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    const animate =  () => { 
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div ref={mount}/>
  );
}

export default App;
