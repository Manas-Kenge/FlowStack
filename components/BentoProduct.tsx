"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BentoProduct() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] my-8">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          image={item.image}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonThree = () => {
    const variants = {
      initial: {
        backgroundPosition: "0 50%",
      },
      animate: {
        backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
      },
    };
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
        style={{
          background:
            "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
          backgroundSize: "400% 400%",
        }}
      >
        <motion.div className="h-full w-full rounded-lg"></motion.div>
      </motion.div>
    );
  };
  

const items = [
  {
    title: "FlowBuilder",
    image: () => (
      <Image
        src=""
        alt="FlowBuilder"
        width={200}
        height={200}
      />
    ),
    description: "A cloud-based IDE that allows developers to code, debug, and deploy applications directly from the browser.",
    header: <SkeletonThree />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "FlowChat",
    description: "A secure team communication platform that facilitates real-time messaging, video conferencing, and file sharing.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "FlowTest",
    description: "A powerful automated testing framework that supports unit, integration, and end-to-end testing.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "FlowAnalytics",
    description:
      "A performance and usage analytics tool that provides insights into how applications are being used.",
    header: <SkeletonThree />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
