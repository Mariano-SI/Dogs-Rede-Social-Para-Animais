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
  user?:string;
  page:number;
  setInfinite:(value: boolean)=>void;
}

const FeedPhotos = ({setOnModalPhoto, user, page, setInfinite}: IFeedPhotos) => {

  const {data, loading, error, request} = useFetch();

  useEffect(()=>{
    async function fetchPhotos() {
      const total = 3;
      const {url, options} = GET_PHOTOS({page, total: 6, user: user ? user : 0})
      const {response, json} = await request(url, options);
      if(response && response.ok && json.length < total){
        setInfinite(false);
      }
    }

    fetchPhotos();
  },[request,user, page,setInfinite]);

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