import * as THREE from 'three';

export const Renderer = new THREE.WebGLRenderer();
export const Scene = new THREE.Scene();

const handleResize = () => {
    Renderer.setSize(window.innerWidth, window.innerHeight);
};

handleResize();
window.addEventListener('resize', handleResize);
