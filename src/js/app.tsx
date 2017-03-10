import {Scene, Renderer} from './components/scene';

const root = document.querySelector('#root');

root.appendChild(Renderer.domElement);
