import React from 'react'
import HowReactWorks from '../HowReactWorks/HowReactWorks'
import StateProps from '../StateProps/StateProps'
import UseEffectHook from '../UseEffectHook/UseEffectHook'
import './Answer.css'

const Answer = () => {
    return (
        <div className='answer_container'>
            <HowReactWorks/>
            <StateProps/>
            <UseEffectHook/>
        </div>
    )
}

export default Answer