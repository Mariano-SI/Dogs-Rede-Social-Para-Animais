import React, { useState } from 'react'
import { ImageSkeletonStyled } from './ImageSkeleton.style'

interface IImageSkeleton{
    alt: string;
    src:string;
}

const ImageSkeleton = ({alt, src}: IImageSkeleton) => {

    const [skeleton, setSkeleton] = useState<boolean>(true);

    function handleImageLoad(e){
        e.target.style.opacity = 1;
        setSkeleton(false);
    }  
    return (
        <ImageSkeletonStyled>
            {skeleton && <div className='skeleton'>

            </div>}
            <img onLoad={handleImageLoad} alt={alt} src={src} className='img'/>
        </ImageSkeletonStyled>
    )
}

export default ImageSkeleton