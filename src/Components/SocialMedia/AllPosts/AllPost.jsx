import React from 'react';
import Post from '../../Shared/Post/Post';
import './allPosts.css';
import bikeRider from '../../../assets/Images/Posts/bike.jpg';
const AllPosts = ()=> {
    return(
        <div className='allPost_section'>
            <div className='allPost_container'>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((num,i)=> (
                    <div className='single_post'>
                        <Post
                            key={num}
                            postImage={bikeRider}
                            status={num % 4 === 0 ? "warning":"success"}
                            title={"Image 1"}
                        />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default AllPosts;