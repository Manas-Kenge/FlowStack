import Link from "next/link";
import { footerLinks } from "../constants";

export const Footer = () => {

    return (
        <footer className='flex flex-col text-black-100   border-t border-gray-100'>
            <div className='flex flex-row max-md:flex-col flex-wrap justify-between sm:px-16 px-6 py-10'>
                <div className='flex flex-row justify-start items-start '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                    </svg>
                    <p className="font-bold text-4xl text-inherit px-2">FlowStack</p>
                </div>
                <div className="footer__links flex flex-row gap-8">
                    {footerLinks.map((item) => (
                        <div key={item.title} className="footer__link">
                            <h3 className="font-bold">{item.title}</h3>
                            <div className="flex flex-col gap-5">
                                {item.links.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={link.url}
                                        className="text-gray-500"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between items-center flex-wrap text-center border-t border-gray-100 sm:px-16 p-3'>
                Copyright © 2018 FlowStack Pvt. Ltd. All Rights Reserved.
            </div>
        </footer>

    )
}
