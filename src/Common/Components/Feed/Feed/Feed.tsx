import React, {useEffect, useState} from 'react'
import { FeedStyled } from "./Feed.style";
import FeedModal from "../FeedModal/FeedModal";
import FeedPhotos from "../FeedPhotos/FeedPhotos";
import IPhoto from '../../../interfaces/IPhoto';


interface IFeed{
    user?:string;
}

function Feed({user}: IFeed){

    const [onModalPhoto, setOnModalPhoto] = useState<IPhoto | null>(null);
    const [pages, setPages] = useState<Array<number>>([1]);
    const [infinite, setInfinite] = useState(true)

    useEffect(()=>{
        let wait :boolean = false;
        function infiniteScroll(){
            if(infinite){
                const scroll = window.scrollY;
                const pageHeight = document.body.offsetHeight - window.innerHeight;
    
                if(scroll> pageHeight * 0.75 && !wait){
                    setPages((pages)=>[...pages, pages.length + 1]);
                    wait = true;
                    setTimeout(() => {
                        wait = false;
                    }, 500);
                }
            }
        }

        window.addEventListener('wheel',infiniteScroll);
        window.addEventListener('scroll',infiniteScroll);

        return ()=>{
            window.removeEventListener('wheel',infiniteScroll);
            window.removeEventListener('scroll',infiniteScroll);
        }
    }, [infinite])

    return(
        <FeedStyled >
            {onModalPhoto && <FeedModal photo={onModalPhoto} setOnModalPhoto={setOnModalPhoto}/>}
            {pages.map((page)=>(
                <FeedPhotos user={user} page={page} setOnModalPhoto={setOnModalPhoto} setInfinite={setInfinite}/>
            ))}
        </FeedStyled>
    )
}

export default Feed;