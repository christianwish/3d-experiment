import * as THREE from 'three';

export const PointLight = new THREE.PointLight(0x0099FF);
export const AmbientLight = new THREE.AmbientLight( 0x0099ff );

PointLight.position.x = 0;
PointLight.position.y = 50;
PointLight.position.z = 400;
