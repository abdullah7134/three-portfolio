import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('tk222211@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {/* Grid 1 */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="assets/grid1.png"
                            alt="grid1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Hi, I'm Abdullah</p>
                            <p className="grid-subtext">
                                With 2+ years of experience in Full Stack Development, Facebook Ads, and AI Automation, I help small businesses grow online — through high-performance websites, targeted ad campaigns, and intelligent workflows that run on autopilot. I specialize in building animated 3D web experiences, scalable web apps, and marketing systems that generate real leads and revenue.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid 2 */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="assets/grid2.png"
                            alt="grid2"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Coding Toolkit</p>
                            <p className="grid-subtext">
                                I build with JavaScript, React.js, Next.js, Node.js, Tailwind CSS, Three.js, GSAP, and Supabase. For marketing and automation, I work with Facebook Ads Manager, n8n, Make, and OpenAI/Claude APIs to build lead generation pipelines and AI-powered content workflows.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Globe */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                showAtmosphere={true}
                                showGraticules={true}
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely across most timezones.</p>
                            <p className="grid-subtext">
                                Based in Pakistan 🇵🇰.
                            </p>
                            <Button name="Contact Me" isBeam href="#contact" containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                {/* Grid 3 */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="assets/grid3.png"
                            alt="grid3"
                            className="w-full sm:h-[266px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">My Passion</p>
                            <p className="grid-subtext">
                                I'm passionate about building things that actually move the needle — whether that's a stunning 3D website, a Facebook campaign that brings in daily leads, or an AI automation that saves hours of manual work every week. I love turning complex problems into clean, results-driven solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div className="xl:col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div
                                className="copy-container cursor-pointer flex items-center gap-2 justify-center"
                                onClick={handleCopy}
                                title={hasCopied ? 'Copied!' : 'Click to copy'}
                            >
                                <img
                                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                                    alt="copy"
                                    className="w-6 h-6"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    tk222211@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
