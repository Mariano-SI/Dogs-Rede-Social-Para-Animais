import React, { useContext } from 'react'
import IPhotoData from '../../../../Common/interfaces/IPhotoData';
import { PhotoContentStyled } from './PhotoContent.style';
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments/PhotoComments';
import { ReactComponent as ViewsIcon } from "../../../../Assets/visualizacao-black.svg";
import PhotoDelete from '../PhotoDelete/PhotoDelete';
import { UserContext } from '../../../../UserContext';

interface IPhotoContent{
    data: IPhotoData;
}

const PhotoContent = ({data}: IPhotoContent) => {

    const {photo, comments} = data;

    const {userData} = useContext(UserContext);


    return (
        <PhotoContentStyled>
            <div className='img'>
                <img src={photo.src} alt={photo.title} />
            </div>
            <div className='imageDetails'>
                <div>
                    <p className="author">
                        { userData && userData.username === photo.author?
                            <PhotoDelete id={photo.id}/>
                            :
                            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
                        <span className='views'><ViewsIcon className='viewsIcon'/>{photo.acessos}</span>
                    </p>
                    <h1 className='title'>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                     <ul className="attributes">
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade} {photo.idade <= 1 ? "ano": "anos"}</li>
                    </ul>
                </div>
            </div>
            <PhotoComments id={photo.id} comments={comments}/>
        </PhotoContentStyled>
    )
}

export default PhotoContent;