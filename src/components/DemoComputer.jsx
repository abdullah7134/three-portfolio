import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const DemoComputer = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('models/gun_satellite_panel_computer.glb');

    useFrame(() => {
        if (group.current) {
            group.current.rotation.y += 0.01;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="6fe1aa7525d041ecad9d9959d5714c19fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="base" position={[0, 17.185, 0]} rotation={[0, -Math.PI / 2, 0]}>
                                    <mesh
                                        name="base_base_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.base_base_0.geometry}
                                        material={materials.base}
                                    />
                                </group>
                                <group name="glass" position={[0, 17.185, 0]} rotation={[0, -Math.PI / 2, 0]}>
                                    <mesh
                                        name="glass_glass_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.glass_glass_0.geometry}
                                        material={materials.glass}
                                    />
                                </group>
                                <group
                                    name="01"
                                    position={[-0.586, 1.505, -26.464]}
                                    rotation={[0, -Math.PI / 2, 0]}
                                >
                                    <mesh
                                        name="01_base_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes['01_base_0'].geometry}
                                        material={materials.base}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('models/gun_satellite_panel_computer.glb');

export default DemoComputer;
