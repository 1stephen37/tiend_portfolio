'use client';
import React from 'react';
import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill} from "react-icons/ri";
import Link from 'next/link';

const icons = [
    {
        path: '/',
        name: <RiYoutubeFill />
    },
    {
        path: '/',
        name: <RiLinkedinFill />
    },
    {
        path: '/',
        name: <RiGithubFill />
    },
    {
        path: '/',
        name: <RiFacebookFill />
    },
    {
        path: '/',
        name: <RiInstagramFill />
    }
]

function Socials({ containerStyles, iconsStyle} : {
    containerStyles : string,
    iconsStyle : string
}) {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index)=> (
                <Link href={icon.path} key={index}>
                    <div className={`${iconsStyle}`}>{icon.name}</div>
                </Link>
            ))}
        </div>
    );
}

export default Socials;
