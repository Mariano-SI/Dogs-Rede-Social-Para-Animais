import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../../../../Common/Components/Feed/Feed/Feed';

const UserProfile = () => {

    const {username} = useParams();

    return (
        <section className='container mainContainer'>
            <h1 className='title'>{username}</h1>
            <Feed user={username}/>
        </section>
    )
}

export default UserProfile