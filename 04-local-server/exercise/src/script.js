import * as THREE from 'three';
console.log(THREE);


console.log("Hello from app.js")
console.log("THREE: ", THREE)

//Create a scene
const scene = new THREE.Scene();

// A visible object needs a Mesh, made up of a Geometry(Shape) and Material, which tells it the color and texture of the object.
// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;
camera.position.x = 2;
camera.position.y = 2;
scene.add(camera);

//Create a renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.my-webgl-canvas')
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(500, 500);
renderer.render(scene, camera);

//Add the renderer to the body
document.body.appendChild(renderer.domElement);

