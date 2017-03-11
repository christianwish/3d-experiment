import * as THREE from 'three';

// Set some camera attributes.
const VIEW_ANGLE = 45;
const ASPECT = (window.innerWidth / window.innerHeight);
const NEAR = 0.1;
const FAR = 1000;

/**
 * Camera
 * @type {THREE}
 */
export const Camera = new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR
);

/**
 * Renderer
 * @type {THREE}
 */
export const Renderer = new THREE.WebGLRenderer();

/**
 * Scene
 * @type {THREE}
 */
export const Scene = new THREE.Scene();

/**
 * On resize window callback
 * @return {void}
 */
const handleResize = () => {
    Renderer.setSize(window.innerWidth, window.innerHeight);
    Camera.aspect = window.innerWidth / window.innerHeight;
	Camera.updateProjectionMatrix();

};

handleResize();
window.addEventListener('resize', handleResize);
