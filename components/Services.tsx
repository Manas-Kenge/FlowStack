"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function Services() {
    return (
        <div className="bg-slate-800 py-8">
            <   div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full ">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            IoT and Mobile Apps
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            IoT based Business Solutions <br />
                            Mobile Apps for Android / iOS <br />

                        </p>
                    </div>
                    <Image
                        src="/mobile-apps.avif"
                        width={400}
                        height={400}
                        alt="linear demo image"
                        className="absolute -right-4 filter -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Website Design and Development
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Domain Registration <br />
                        Web site & email Hosting <br />
                        Web Site design & related services
                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                    <div className="max-w-lg">
                        <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Software Products
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                            FlowBuilder <br/>
                            FlowChat  <br />
                            FlowTest <br />
                            FlowAnalytics
                        </p>
                    </div>
                    <Image
                        src="/software.avif"
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
            </div>
        </div>
    );
}
