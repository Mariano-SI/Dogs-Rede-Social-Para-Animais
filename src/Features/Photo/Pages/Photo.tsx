import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../Common/CustomHooks/useFEtch';
import { GET_PHOTO } from '../../../Common/api';
import Error from '../../../Common/Components/Error/Error';
import Loading from '../../../Common/Components/Loading/Loading';
import PhotoContent from '../Components/PhotoContent/PhotoContent';
import IPhotoData from '../../../Common/interfaces/IPhotoData';



const Photo = () => {

    const {id} = useParams();

    const {data, loading, error, request} = useFetch()

    useEffect(()=>{
        const {url, options} = GET_PHOTO(id);

        request(url, options)
    }, [request, id])

    if(error) return <Error message={error}/>
    if(loading) return <Loading/>
    if(data){
        return(
            <section className='container mainContainer'>{<PhotoContent single={true} data={data}/>}</section>
        )
    } 
    
}

export default Photo