import * as THREE from 'three';

export const Renderer = new THREE.WebGLRenderer();
export const Scene = new THREE.Scene();

window.addEventListener('resize', () => {
    Renderer.setSize(30, 50);
});
