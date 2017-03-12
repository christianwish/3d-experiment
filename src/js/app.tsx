import 'nodeModules/normalize.css/normalize.css';
import 'css/basic.css'
import * as THREE from 'three';
import {Scene, Renderer, Camera} from './components/scene';
import {PointLight, AmbientLight} from './components/light';
import {Sphere} from './shapes/sphere';
import RenderStack from './components/render-stack';

let mouseX = 0;
let mouseY = 0;

// Add and reposition Light to scene
window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

const stack = new RenderStack(() => {
    Renderer.render(Scene, Camera);
});

// Append in DOM
const root = document.querySelector('#root');
root.appendChild(Renderer.domElement);

Renderer.setClearColor( 0x0099FF );

// Add Sphere
const sphere = Sphere();
Scene.add(sphere);
stack.push(() => {
    sphere.position.x = -((window.innerWidth / 2) - mouseX);
    sphere.position.y = ((window.innerHeight / 2) - mouseY);
});

Scene.add(AmbientLight);
Scene.add(PointLight);

stack.render();
