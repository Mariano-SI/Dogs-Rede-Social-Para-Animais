import React, { useEffect } from 'react'
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem'
import useFetch from '../../../CustomHooks/useFEtch'
import { GET_PHOTOS } from '../../../api';
import Error from '../../Error/Error';
import Loading from '../../Loading/Loading';
import { FeedPhotosStyled } from './FeedPhotos.style';
import IPhoto from '../../../interfaces/IPhoto';

interface IFeedPhotos{
  setOnModalPhoto: (photo: IPhoto | null) => void;
}

const FeedPhotos = ({setOnModalPhoto}: IFeedPhotos) => {

  const {data, loading, error, request} = useFetch();

  useEffect(()=>{
    async function fetchPhotos() {
      const {url, options} = GET_PHOTOS({page: 1, total: 6, user: 0})
      const {response, json} = await request(url, options);
      //console.log(json)
    }

    fetchPhotos();
  },[request]);

  if(error) return <Error message={error}/>
  if(loading) return <Loading/>
  if(data){
    return (
      <FeedPhotosStyled className='animeLeft'>
        {Array.isArray(data) && data.map((photo)=>(
          <FeedPhotosItem 
            key={photo.id} 
            photo={photo} 
            setOnModalPhoto={setOnModalPhoto}
          />))}
      </FeedPhotosStyled>
    )
  }
  return null;
}

export default FeedPhotos