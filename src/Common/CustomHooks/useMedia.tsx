import React, { useEffect, useState } from 'react'

const useMedia = (media: string) => {

    const [match, setMatch] = useState<boolean| null>(null);
    
    useEffect(()=>{
        changeMatch();

        function changeMatch(){
            const {matches}:MediaQueryList = window.matchMedia(media);
            setMatch(matches);
        }

        window.addEventListener('resize', changeMatch);

        return () =>{
            window.removeEventListener('resize', changeMatch);
        }

    }, [media]);

    return match;
}

export default useMedia