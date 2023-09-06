import React, {useContext, useState} from 'react'
import { UserContext } from '../../../../UserContext'
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';
import IComment from '../../../../Common/interfaces/IComment';
import { PhotoCommentsStyled } from './PhotoComments.style';

interface IPhotoComments{
  id: number;
  comments: IComment[];
}

const PhotoComments = ({id, comments}: IPhotoComments) => {
  const [photoComments, setPhotoComments] = useState(()=>comments)
  const {logged} = useContext(UserContext);


  return (
    <>
      <ul className='comments'>
        {photoComments.map((comment)=>(
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
        ))}
      </ul>
      {logged && <PhotoCommentsForm id={id} setPhotoComments={setPhotoComments}/>}
    </>
  )
}

export default PhotoComments