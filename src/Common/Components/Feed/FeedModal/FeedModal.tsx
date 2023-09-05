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
}

const FeedModal = ({photo}: IFeedModal) => {
  const {data, error, loading, request} = useFetch();

  useEffect(()=>{
    if(photo && photo.id){
      const {url, options} = GET_PHOTO(photo.id);
      request(url, options);
    }
  },[photo, request])

  return (
    <FeedModalStyled>
      {error && <Error message={error}/>}
      {loading && <Loading/>}
      {data ? <PhotoContent data={data}/>: ''}
    </FeedModalStyled>
  )
}

export default FeedModal