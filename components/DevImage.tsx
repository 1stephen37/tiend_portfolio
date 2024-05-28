import React from 'react';
import Image from 'next/image'

function DevImage({containerStyles, imgSrc} : {
    containerStyles : string,
    imgSrc : string
}) {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} fill priority alt={''} />
        </div>
    );
}

export default DevImage;
