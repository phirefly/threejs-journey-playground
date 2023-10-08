import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = -25
mesh.position.y = -5
mesh.position.z = 3
mesh.position.normalize()
console.log(mesh.position.length())
// Another way to do it
// mesh.position.set(1.7, -0.6, -1.0)
scene.add(mesh)
mesh.scale.x = 2
mesh.scale.y = -.5
mesh.scale.z = -2.5

// Rotation and Quartanion do th same thing
mesh.rotation.reorder("YXZ")
mesh.rotation.y = Math.PI

console.log(mesh.position.length())
// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// scale

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
// camera.lookAt(new THREE.Vector3(3,0,0))
console.log(mesh.position.distanceTo(camera.position))

const group = new THREE.Group()
scene.add(group)
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xefefef})
)
cube2.position.x = -2
group.add(cube2)
group.rotation.y = 3

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)