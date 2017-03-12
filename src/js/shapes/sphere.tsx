import * as THREE from 'three';

export const Sphere = (radius = 20, color = 0x0099FF) => {
    const SEGMENTS = 32;
    const RINGS = 32;
    const sphereMaterial = new THREE.MeshLambertMaterial({
        color: color
        //wireframe: true
    });
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, SEGMENTS, RINGS), sphereMaterial);
    sphere.position.z = -600;

    return sphere;
};
