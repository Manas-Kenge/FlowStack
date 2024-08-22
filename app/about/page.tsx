"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { Image } from "@nextui-org/react";

export default function about() {
    const words = ["better", "innovative", "beautiful", "modern"];
    return (
        <div>
            <div className="h-[40rem] flex justify-center items-center px-4 bg-slate-900">
                <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                    Build
                    <FlipWords words={words} /> <br />
                    websites with FlowStack
                </div>
            </div>
            <div className="bg-white">
                <div className="flex flex-col items-center text-center mx-40 p-8 font-sans">
                    <h1 className="text-4xl font-bold mb-8">Our story</h1>
                    <p className="text-md mb-8 mx-20">
                        FlowStack was born out of a simple yet powerful idea: to revolutionize the way businesses build software. As a group of passionate developers, we recognized the complexities and inefficiencies that often come with managing software projects. Determined to find a better solution, we came together in 2018 to create a platform that empowers teams to build high-quality software more efficiently.
                    </p>
                    <p className="text-md mb-8 mx-20">
                        What started as a small project quickly grew into a robust platform trusted by companies around the world. Our success is driven by our commitment to innovation and our deep understanding of the challenges faced by developers, product managers, and business leaders. Today, FlowStack is more than just a tool—it&apos;s a partner in helping businesses turn their ideas into reality. As we continue to evolve, our mission remains the same: to simplify software development and help our customers succeed.
                    </p>
                    <p className="text-md mb-8 mx-20">
                        But our story is far from over. We continue to evolve, always staying ahead of the curve, and our passion for what we do remains as strong as ever. We believe that the future of software development lies in collaboration, efficiency, and innovation, and we&apos;re excited to lead the way.
                    </p>
                </div>
            </div>
            <div className="bg-cyan-900 py-16">
                <h1 className="text-4xl font-bold text-white text-center mb-16">Our Leadership</h1>
                <div className="flex justify-center space-x-8">
                    {leadershipTeam.map((leader, index) => (
                        <div key={index} className="text-center">
                            <div className="w-48 h-48 mb-4 mx-auto rounded-full overflow-hidden bg-sky-300">
                                <Image src={leader.imgSrc} alt={leader.name} className="w-full h-full object-cover" />
                            </div>
                            <h2 className="text-xl font-bold text-white">{leader.name}</h2>
                            <p className="text-md text-white">{leader.title}</p>
                            <a href="#" className="text-blue-400">{leader.bio}</a>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

const leadershipTeam = [
    {
        name: 'ABC',
        title: 'CEO & Co-Founder',
        bio: 'Watch Bio',
        imgSrc: '/avatar1.png',
    },
    {
        name: 'ABC',
        title: 'CTO & Co-Founder',
        bio: 'Watch Bio',
        imgSrc: '/avatar2.png',
    },
    {
        name: 'ABC',
        title: 'COO',
        bio: 'Watch Bio',
        imgSrc: '/man.png',
    },
];
