import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Use Clock instead
// const clock = new THREE.Clock()

// Note: Green Sck has ts own animation loop but you still need to call render
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: -2 })
gsap.to(mesh.position, { duration: 1, delay: 3, x: 0 })

const animationOn = false

const looper = () => {
    // const time = clock.getElapsedTime() // Do not use getDelta(). It will not work
    // Update
    // mesh.position.x += .01
    // mesh.rotation.x = time * Math.PI * 2 // One rotation per second
    // mesh.rotation.y += .01 * time
    // mesh.rotation.y = .1 * time
    // Render
    renderer.render(scene, camera)
    console.log('loop')

    if (animationOn === true) {
        window.requestAnimationFrame(looper)
    }

}

looper();
