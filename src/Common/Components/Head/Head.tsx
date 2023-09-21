import React, { useEffect } from 'react'

interface IHead{
    title: string;
    description?:string
}

const Head = ({title, description}: IHead) => {

    useEffect(()=>{ 
        document.title = title + ' | Dogs';

        if(description){
            document.querySelector("meta[name='description']")?.setAttribute('content', description);
        }
    }, [title, description]);

    return (
        <></>
    )
}

export default Head