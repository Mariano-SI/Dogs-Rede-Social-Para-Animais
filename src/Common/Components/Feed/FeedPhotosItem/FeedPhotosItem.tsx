import React from 'react'
import { FeedPhotosItemStyled } from './FeedPhotosItem.style';
import {ReactComponent as Views} from '../../../../Assets/visualizacao.svg'
import IPhoto from '../../../interfaces/IPhoto';
import ImageSkeleton from '../../ImageSkeleton/ImageSkeleton';

interface IFeedPhotosItem{
  photo: IPhoto,
  setOnModalPhoto: (photo: IPhoto | null) => void
}

const FeedPhotosItem = ({photo, setOnModalPhoto}: IFeedPhotosItem) => {

  function handleClick(){
    setOnModalPhoto(photo);
  }

  return (
    <FeedPhotosItemStyled onClick={handleClick}>
      <ImageSkeleton alt={photo.title} src={photo.src}/>
      <span className='views'><Views className='viewsIcon'/> {photo.acessos}</span>
    </FeedPhotosItemStyled>
  )
}

export default FeedPhotosItem