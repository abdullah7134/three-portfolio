import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react.glb')
    const logoRef = useRef()

    // Animate rotation around its own Y-axis
    useFrame(() => {
        if (logoRef.current) {
            logoRef.current.rotation.y += 0.01
        }
    })

    return (
        <group ref={logoRef} scale={0.2} {...props}> {/* Keep position passed from parent */}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['React-Logo_Material002_0'].geometry}
                material={materials['Material.002']}
                position={[0, 0, 0]} // Don't offset inside group
                rotation={[0, 0, -Math.PI / 2]} // Already good for visual facing
            />
        </group>
    )
}

useGLTF.preload('/models/react.glb')
export default ReactLogo
