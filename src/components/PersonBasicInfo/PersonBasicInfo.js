import React from 'react'
import profilePic from '../../images/sabid.jpg'
import './PersonBasicInfo.css'

const PersonBasicInfo = () => {
    return (
        <div className="person_basic_info">
            <img className='profilePic' src={profilePic} alt="profile_picture" />
            <div className="name_location">
                <p className='person_name'>MD Sabid Hasan</p>
                <p className='location'>Dhaka, Bangladesh</p>
            </div>
        </div>
    )
}

export default PersonBasicInfo