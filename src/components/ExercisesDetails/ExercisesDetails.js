import React from 'react';
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
        </div>
    );
};

export default ExercisesDetails;