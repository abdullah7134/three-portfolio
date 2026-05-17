import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { workExperiences } from "../constants/index.js";
import { CanvasLoader } from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className={"c-space my-20"}>
            <div className={"w-full text-white-600"}>
                <h3 className={"head-text"}>Work Experience</h3>
                <div className={"work-container"}>
                    <div className={"work-canvas"}>
                        <Canvas shadows>
                            <ambientLight intensity={0.6} />
                            <directionalLight
                                position={[5, 10, 5]}
                                intensity={1.2}
                                castShadow
                                shadow-mapSize-width={1024}
                                shadow-mapSize-height={1024}
                                shadow-bias={-0.0001}
                            />
                            <spotLight
                                position={[-5, 5, 5]}
                                angle={0.3}
                                penumbra={0.8}
                                intensity={0.8}
                                castShadow
                            />
                            <pointLight position={[0, 2, -4]} intensity={0.4} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                            <Suspense fallback={<CanvasLoader />}>
                                <Developer animationName={animationName} position-y={-3} scale={3} />



                            </Suspense>
                        </Canvas>
                    </div>

                    <div className={"work-content"}>
                        <div className={"sm:py-10 py-5 sm:px-5 px-2.5"}>
                            {workExperiences.map(({ id, name, icon, title, animation, iconClass }) => (
                                <div
                                    key={id}
                                    className={"work-content_container group"}
                                    onClick={() => setAnimationName(animation?.toLowerCase() || 'idle')}
                                    onPointerOver={() => setAnimationName(animation?.toLowerCase() || 'idle')}
                                    onPointerOut={() => setAnimationName('idle')}
                                >
                                    <div className={"flex flex-col h-full justify-start items-center py-2"}>
                                        <div className={`work-content_logo ${iconClass ?? ''}`}>
                                            <img src={icon} alt="logo" />
                                        </div>
                                        <div className={"work-content_bar"} />
                                    </div>
                                    <div className={"sm:p-5 px-2.5 py-5"}>
                                        <p className={"font-bold text-white-800 mb-5"}>
                                            {name}
                                        </p>
                                        <p className={"group-hover:text-white transition ease-in-out duration-500"}>
                                            {title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
