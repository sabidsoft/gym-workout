import React from 'react';
import ActivityButton from '../ActivityButton/ActivityButton';
import Break from '../Break/Break';
import ExerciseDeatils from '../ExerciseDetails/ExerciseDeatils';
import PersonBasicInfo from '../PersonBasicInfo/PersonBasicInfo';
import PersonExtraInfo from '../PersonExtraInfo/PersonExtraInfo';
import './ExercisesDetails.css'

const ExercisesDetails = () => {
    return (
        <div>
            <PersonBasicInfo/>
            <PersonExtraInfo/>
            <Break/>
            <ExerciseDeatils/>
            <ActivityButton/>
        </div>
    );
};

export default ExercisesDetails;