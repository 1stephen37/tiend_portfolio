'use client';
import {useState, useEffect} from "react";
import {usePathname} from "next/navigation";

// component
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";

function Header() {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        const listenerScroll = () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        };
        window.addEventListener('scroll', listenerScroll);
        return () => window.removeEventListener('scroll', listenerScroll);
    }, []);
    return (
        <header
            className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} 
            sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo/>
                    <div className="flex items-center gap-x-6">
                        <Navbar containerStyle={'hidden xl:flex gap-x-8 items-center'}
                                linkStyles={'relative hover:text-primary transition-all'}
                                underlineStyles={'absolute left-0 top-full h-[2px] w-full bg-primary'}/>
                        <ThemeToggle/>
                        <div className="xl:hidden ">
                            <MobileNavbar/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
