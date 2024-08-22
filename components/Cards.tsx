"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Cards() {
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials} 
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export const testimonials = [
  {
    quote:
      "FlowStack transformed our workflow, making it faster and more efficient than ever before! The seamless integration with our existing systems saved us countless hours, and their customer support is top-notch. Highly recommended!",
    name: "John Doe",
  },
  {
    quote:
      "We switched to FlowStack six months ago, and it’s been a game-changer for us. The platform is intuitive and packed with features that cater to all our development needs. The performance improvements are substantial, and the user experience is exceptional.",
    name: "Emily Rodriguez",
  },
  {
    quote: "FlowStack has significantly improved our team’s productivity. The tools are incredibly versatile, and the customization options allow us to tailor the software exactly to our needs. Their attention to detail and customer support is unparalleled.",
    name: "Michael Lee",
  },
  {
    quote:
      "From the moment we started using FlowStack, we saw immediate benefits. The interface is clean and user-friendly, making it easy for our entire team to adopt. The collaboration features have brought our remote teams closer together, streamlining our project management process.",
    name: "Sarah Johnson",
  },
];
