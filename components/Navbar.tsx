
import React from 'react';
import Link from 'next/link'
import {usePathname} from "next/navigation";
import {motion} from 'framer-motion';

const links = [
    {
        path: '/', name: "Trang chủ"
    },
    {
        path: '/projects', name: "dự án"
    },
    {
        path: '/contact', name: "liên hệ"
    },
]

function Navbar({containerStyle, linkStyles, underlineStyles}: {
    containerStyle: string,
    linkStyles: string,
    underlineStyles: string
}) {
    const path = usePathname();
    return (
        <nav className={`${containerStyle}`}>
            {links.map((link, index) => (
                <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
                    {link.path === path && (
                        <motion.span initial={{y: '-100%'}} animate={{y: 0}} transition={{type: 'tween'}}
                                     layoutId={'underline'} className={`${underlineStyles}`}/>
                    )}
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}

export default Navbar;
