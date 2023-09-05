import { FeedStyled } from "./Feed.style";
import FeedModal from "../FeedModal/FeedModal";
import FeedPhotos from "../FeedPhotos/FeedPhotos";


function Feed(){
    return(
        <FeedStyled >
            <FeedModal/>
            <FeedPhotos/>
        </FeedStyled>
    )
}

export default Feed;