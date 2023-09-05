import React, {useState} from 'react'
import { FeedStyled } from "./Feed.style";
import FeedModal from "../FeedModal/FeedModal";
import FeedPhotos from "../FeedPhotos/FeedPhotos";
import IPhoto from '../../../interfaces/IPhoto';


function Feed(){

    const [onModalPhoto, setOnModalPhoto] = useState<IPhoto | null>(null);

    return(
        <FeedStyled >
            {onModalPhoto && <FeedModal photo={onModalPhoto} setOnModalPhoto={setOnModalPhoto}/>}
            <FeedPhotos setOnModalPhoto={setOnModalPhoto}/>
        </FeedStyled>
    )
}

export default Feed;