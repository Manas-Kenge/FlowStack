"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";

export const Appbar = () => {
    const arrowDown = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
    );

    const logo = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
        </svg>
    );

    return <div>
        <Navbar className="bg-current">
            <NavbarBrand>
                {logo}
                <p className="font-bold text-lg text-inherit p-2 text-white">FlowStack</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem >
                    <Link href="/" className="text-white">
                        Home
                    </Link>
                </NavbarItem >
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
                                radius="sm"
                                variant="light"
                                endContent={arrowDown}
                            >
                                Products
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="products"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="FlowBuilder"
                            description="A cloud-based IDE that allows developers to code, debug, and deploy applications directly from the browser."
                            href="/products"
                        >
                            FlowBuilder
                        </DropdownItem>
                        <DropdownItem
                            key="FlowChat"
                            description="A secure team communication platform that facilitates real-time messaging, video conferencing, and file sharing."
                            href="/products"
                        >
                            FlowChat
                        </DropdownItem>
                        <DropdownItem
                            key="FlowTest"
                            description="A powerful automated testing framework that supports unit, integration, and end-to-end testing."
                            href="/products"
                        >
                            FlowTest
                        </DropdownItem>
                        <DropdownItem
                            key="FlowAnalytics"
                            description="A performance and usage analytics tool that provides insights into how applications are being used."
                            href="/products"
                        >
                            FlowAnalytics
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem >
                    <Link href="/servicess" className="text-white">
                        Services
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href="/about" className="text-white">
                        About us
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/contact" className="text-white">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    </div>
}
