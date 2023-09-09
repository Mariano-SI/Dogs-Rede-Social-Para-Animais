import React, {useContext, useEffect, useRef, useState} from 'react'
import { UserContext } from '../../../../UserContext'
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';
import IComment from '../../../../Common/interfaces/IComment';
import styles from './PhotComments.module.css'

interface IPhotoComments{
  id: number;
  comments: IComment[];
}

const PhotoComments = ({id, comments}: IPhotoComments) => {
  const [photoComments, setPhotoComments] = useState(()=>comments)
  const {logged} = useContext(UserContext);

  const commentContainer = useRef<HTMLUListElement>(null);

  console.log(commentContainer.current)

  useEffect(()=>{
    if(commentContainer.current){
      commentContainer.current.scrollTop= commentContainer.current.scrollHeight;
    }
  }, [photoComments])

  return (
    <>
      <ul className={styles.comments} ref={commentContainer}>
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