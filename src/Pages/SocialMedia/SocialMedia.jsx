import React from 'react';
import AllPosts from '../../Components/SocialMedia/AllPosts/AllPost';
import Header from '../../Components/SocialMedia/Header/Header';
import Title from '../../Components/SocialMedia/Title/TItle';
import './SocialMedia.css';
const SocialMedia = ()=> {
    return(
        <div className='social__media__container'>
            <Title/>
            <Header/>
            <AllPosts/>
        </div>
    )
}

export default SocialMedia