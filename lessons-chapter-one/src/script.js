import * as THREE from 'three';

// Scene
const scene = new THREE.Scene()

// Object
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1

scene.add(group)

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }))

group.add(cube1)
cube1.position.x = -1.5

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }))

group.add(cube2)
cube2.position.x = 0

const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x0000ff }))

group.add(cube3)
cube3.position.x = 1.5

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
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)