import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from "../components/HackerRoom.jsx";
import { CanvasLoader } from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Reactlogo from "../components/Reactlogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const issmall = useMediaQuery({ query: '(max-width: 440px)' });
    const ismobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
    const sizes = calculateSizes(issmall, ismobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            {/* Text Section */}
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10 relative">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I'm Abdullah <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient text-center">
                    Building Products, Brands & Automated Systems
                </p>
            </div>

            {/* 3D Canvas Section */}
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera isMobile={ismobile}>

                        <HackerRoom
                            position={sizes.deskPosition}
                            rotation={[0,-Math.PI,0]}
                            scale={sizes.deskScale}
                        />
                        </HeroCamera>
                        <group>
                            <Reactlogo position={[10,8,-5]} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={[-10,5,0]} />

                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className={"absolute bottom-7 left-0 right-0 w-full z-10 c-space"}>
                <Button
                    name="Let's work together!"
                    isBeam
                    href="#contact"
                    containerClass="sm:w-fit w-full sm:min-w-96"
                />
            </div>
        </section>
    );
};

export default Hero;
