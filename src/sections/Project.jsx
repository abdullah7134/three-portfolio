import React, { Suspense, useState } from 'react';
import { myProjects } from "../constants/index.js";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { CanvasLoader } from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

const Project = () => {
    const [selectedProjectindex, setSelectedProjectindex] = useState(0);
    const projectCount = myProjects.length;
    const currentproject = myProjects[selectedProjectindex];

    const handleNavigation = (direction) => {
        setSelectedProjectindex((prevIndex) =>
            direction === "prev"
                ? prevIndex === 0 ? projectCount - 1 : prevIndex - 1
                : prevIndex === projectCount - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="c-space my-20">
            <p className="head-text">My Work</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                {/* Left Panel */}
                <div className="flex flex-col gap-5 relative sm:px-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 left-0">
                        <img
                            src={currentproject.spotlight}
                            alt="spotlight"
                            className="w-full h-96 object-cover rounded-xl"
                        />
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentproject.logoStyle}>
                        <img src={currentproject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
                    </div>
                    <div className="flex flex-col gap-3 text-white-600 my-5">
                        <p className="text-2xl font-semibold text-white animatedText">{currentproject.title}</p>
                        <p className="animatedText">{currentproject.desc}</p>
                        <p className="animatedText">{currentproject.subdesc}</p>
                    </div>
                    <div className="flex items-center flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentproject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation("prev")}>
                            <img src="/assets/left-arrow.png" className="w-4 h-4" alt="arrow" />
                        </button>
                        <button className="arrow-btn" onClick={() => handleNavigation("next")}>
                            <img src="/assets/right-arrow.png" className="w-4 h-4" alt="arrow" />
                        </button>
                    </div>
                </div>

                {/* Right 3D Panel */}
                <div className="border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <spotLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group
                                    position={[0.0, -0.9, 0.0]}
                                    rotation={[0.07, 0.06, 0.0]}
                                    scale={5.0}
                                >
                                    <DemoComputer />
                                </group>
                            </Suspense>
                        </Center>
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Project;
