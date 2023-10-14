import * as THREE from 'three'
import gsap from 'gsap'

const cursor = {
    x: 0,
    y: 0
}

// Cursor
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - .5
    cursor.y = event.clientY / sizes.height - .5
    console.log(cursor.x, cursor.y)
});


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 300
}

// Camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 100)
// First parameter: the vertical field of view
// Second parameter: the aspect ratio (width/height of the render)
// Third parameter: the near plane
// Fourth parameter: the far plane
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Use Clock instead
const clock = new THREE.Clock()

// Note: Green Sck has ts own animation loop but you still need to call render
// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
// gsap.to(mesh.position, { duration: 1, delay: 2, x: -2 })
// gsap.to(mesh.position, { duration: 1, delay: 3, x: 0 })

const animationOn = true

const looper = () => {
    const time = clock.getElapsedTime() // Do not use getDelta(). It will not work
    // // Update
    // mesh.position.y += .01
    // mesh.rotation.x = time * Math.PI * 2 // One rotation per second
    // mesh.rotation.y += .01 * time
    // mesh.rotation.y += .1
    // mesh.rotation.y = .1 * time
    // Render
    renderer.render(scene, camera)
    console.log('loop')

    if (animationOn === true) {
        camera.position.x = cursor.x * 10 // 10 is the distance from the camera
        camera.position.y = -cursor.y * 10
        camera.lookAt(mesh.position)
        window.requestAnimationFrame(looper)
    }

}

looper();
