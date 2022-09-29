import React from 'react';
import PersonBasicInfo from '../PersonBasicInfo/PersonBasicInfo';
import PersonExtraInfo from '../PersonExtraInfo/PersonExtraInfo';
import './ExercisesDetails.css'

const ExercisesDetails = () => {
    return (
        <div>
            <PersonBasicInfo/>
            <PersonExtraInfo/>
        </div>
    );
};

export default ExercisesDetails;