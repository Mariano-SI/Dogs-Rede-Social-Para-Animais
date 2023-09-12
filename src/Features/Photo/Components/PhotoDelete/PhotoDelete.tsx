import React from 'react'
import { PhotoDeleteStyled } from './PhotoDelete.style'
import { PHOTO_DELETE } from '../../../../Common/api';
import useFetch from '../../../../Common/CustomHooks/useFEtch';

interface IPhotoDelete{
    id:number;
}

function PhotoDelete ({id}: IPhotoDelete){
    const {request, loading}= useFetch();

    async function handleDelete(){
        const confirm = window.confirm("tem certeza que deseja deletar? ");
        if(confirm){
            const {url, options} = PHOTO_DELETE(id);
            const {response} = await request(url, options);
    
            if(response && response.ok){
                window.location.reload();
            }
        }
    }
    return (
        <PhotoDeleteStyled>
            {loading ?
             <button className='deleteButtton' disabled>Deletando</button>
                :
             <button className='deleteButtton' onClick={handleDelete}>Deletar</button>
             }
        </PhotoDeleteStyled>
    )
}

export default PhotoDelete;