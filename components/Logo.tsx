import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Logo() {
    return (
        <Link href={''}>
            <Image src={'/images/logo.svg'} width={54} height={54} priority alt={'main logo'} />
        </Link>
    );
}

export default Logo;
