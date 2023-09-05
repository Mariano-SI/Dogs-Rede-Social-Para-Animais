import React, {useEffect} from 'react'
import IPhoto from '../../../interfaces/IPhoto'
import { FeedModalStyled } from './FeedModal.style'
import useFetch from '../../../CustomHooks/useFEtch'
import { GET_PHOTO } from '../../../api'
import Error from '../../Error/Error'
import Loading from '../../Loading/Loading'
import PhotoContent from '../../../../Features/Photo/Components/PhotoContent/PhotoContent'

interface IFeedModal{
  photo?: IPhoto;
  setOnModalPhoto: (photo: IPhoto | null) => void;
}

const FeedModal = ({photo, setOnModalPhoto}: IFeedModal) => {
  const {data, error, loading, request} = useFetch();

  useEffect(()=>{
    if(photo && photo.id){
      const {url, options} = GET_PHOTO(photo.id);
      request(url, options);
    }
  },[photo, request])

  function handleOutsideClick(e: React.MouseEvent<HTMLDivElement>):void{
    if(e.target === e.currentTarget){
      setOnModalPhoto(null);
    }    
  } 

  return (
    <FeedModalStyled onClick={handleOutsideClick}>
      {error && <Error message={error}/>}
      {loading && <Loading/>}
      {data ? <PhotoContent data={data}/>: ''}
    </FeedModalStyled>
  )
}

export default FeedModal