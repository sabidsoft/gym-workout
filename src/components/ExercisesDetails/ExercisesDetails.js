import React from 'react'
import ActivityButton from '../ActivityButton/ActivityButton'
import Break from '../Break/Break'
import ExerciseDeatils from '../ExerciseDetails/ExerciseDeatils'
import PersonBasicInfo from '../PersonBasicInfo/PersonBasicInfo'
import PersonExtraInfo from '../PersonExtraInfo/PersonExtraInfo'
import './ExercisesDetails.css'

const ExercisesDetails = ({ exerciseTime, breakTime, handleBreakTime }) => {
    return (
        <div>
            <PersonBasicInfo/>
            <PersonExtraInfo/>
            <Break handleBreakTime={handleBreakTime} />
            <ExerciseDeatils exerciseTime={exerciseTime} breakTime={breakTime} />
            <ActivityButton/>
        </div>
    )
}

export default ExercisesDetails