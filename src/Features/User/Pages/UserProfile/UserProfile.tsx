import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../../../../Common/Components/Feed/Feed/Feed';
import Head from '../../../../Common/Components/Head/Head';

const UserProfile = () => {

    const {username} = useParams();

    return (
        <section className='container mainContainer'>
            {username && <Head title={username}/>}
            <h1 className='title'>{username}</h1>
            <Feed user={username}/>
        </section>
    )
}

export default UserProfile