import 'nodeModules/normalize.css/normalize.css';
import 'css/basic.css'
import * as THREE from 'three';
import {Scene, Renderer, Camera} from './components/scene';
import {PointLight, AmbientLight} from './components/light';

const render = () => {
    Renderer.render(Scene, Camera);
    window.requestAnimationFrame(render);

    sphere.rotation.x = Date.now() * 0.001;
    sphere.rotation.y = Date.now() * 0.001;
};

// Append in DOM
const root = document.querySelector('#root');
root.appendChild(Renderer.domElement);

Renderer.setClearColor( 0x0099FF );

// Add and reposition Light to scene
window.addEventListener('mousemove', (event) => {
    let w = window.innerWidth,
        h = window.innerHeight;
    PointLight.position.x = -((w / 2) - event.clientX) ;
    PointLight.position.y = ((h / 2) - event.clientY);
});

Scene.add( AmbientLight );
Scene.add(PointLight);

//============================
//============================

// Set up the sphere vars
const RADIUS = 80;
const SEGMENTS = 4;
const RINGS = 32;

// create the sphere's material
const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x0099FF,
    //wireframe: true
});

const sphere = new THREE.Mesh(new THREE.SphereGeometry(RADIUS, SEGMENTS, RINGS), sphereMaterial);

// Move the Sphere back in Z so we
// can see it.
sphere.position.z = -600;
// Finally, add the sphere to the scene.
Scene.add(sphere);
window.addEventListener('mousemove', (event) => {
    let w = window.innerWidth,
        h = window.innerHeight;
    sphere.position.x = -((w / 2) - event.clientX) ;
    sphere.position.y = ((h / 2) - event.clientY);
})

render();
