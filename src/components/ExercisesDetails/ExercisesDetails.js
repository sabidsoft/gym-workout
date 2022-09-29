import React from 'react';
import Break from '../Break/Break';
import PersonBasicInfo from '../PersonBasicInfo/PersonBasicInfo';
import PersonExtraInfo from '../PersonExtraInfo/PersonExtraInfo';
import './ExercisesDetails.css'

const ExercisesDetails = () => {
    return (
        <div>
            <PersonBasicInfo/>
            <PersonExtraInfo/>
            <Break/>
        </div>
    );
};

export default ExercisesDetails;