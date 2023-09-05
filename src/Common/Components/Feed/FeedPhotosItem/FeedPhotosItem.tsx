import React from 'react'
import { FeedPhotosItemStyled } from './FeedPhotosItem.style';
import {ReactComponent as Views} from '../../../../Assets/visualizacao.svg'


interface IPhotoPostItem {
  photo:{
    acessos: string;
    author: string;
    date: string;
    id: number;
    idade: string;
    peso: string;
    src: string;
    title: string;
    total_comments: string;
  }
}

const FeedPhotosItem = ({photo}: IPhotoPostItem) => {
  return (
    <FeedPhotosItemStyled>
      <img src={photo.src} alt={photo.title} />
      <span className='views'><Views className='viewsIcon'/> {photo.acessos}</span>
    </FeedPhotosItemStyled>
  )
}

export default FeedPhotosItem