import React, {useState} from 'react'
import {ReactComponent as Enviar} from "../../../../Assets/enviar.svg"
import useFetch from '../../../../Common/CustomHooks/useFEtch';
import { POST_COMMENT } from '../../../../Common/api';
import IComment from '../../../../Common/interfaces/IComment';
import Error from '../../../../Common/Components/Error/Error';
import { PhotoCommentsFormStyled } from './PhotoCommentsForm.style';

interface IPhotoCommentsForm{
  id: number;
  setPhotoComments:(comments) => void;
}

const PhotoCommentsForm = ({id, setPhotoComments}: IPhotoCommentsForm) => {

  const {request, error} = useFetch();

  const [comment, setComment] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const {url, options} = POST_COMMENT(id, {comment})
    const {response, json} = await request(url, options);
 
    if(response && response.ok){
      setPhotoComments((comments:  IComment[])=> [...comments, json]);
      setComment('');
    }
  } 

  return (
    <PhotoCommentsFormStyled onSubmit={handleSubmit}>
      <textarea 
      className='textArea'
        placeholder='Comente...'
        value={comment} 
        onChange={({target}) => setComment(target.value)}
        id="comment"
        name="comment"
      />
      <button className='newCommentButton'><Enviar/></button>
      {error && <Error message={error}/>}
    </PhotoCommentsFormStyled>
  )
}

export default PhotoCommentsForm