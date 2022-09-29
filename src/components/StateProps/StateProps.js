import React from 'react'
import './StateProps.css'

const StateProps = () => {
    return (
        <div className='state_props_container'>
            <h1 className='state_ptops_title'>Difference Between State and Props</h1>
            <ol className='state_props_text'>
                <li>
                    In state, The Data is passed within the component only. In props, The Data is passed from one component to another.
                </li>
                <li>
                    State is mutable (can be modified). Props is immutable(can't be modified)
                </li>
                <li>
                    State can be used only with the state components/class component (Before 16.0). Props can be used with state and functional components.
                </li>
            </ol>
        </div>
    )
}

export default StateProps