import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './ActivityButton.css'

const ActivityButton = () => {
    const notify = () => {
        toast.success('Congratulations! You are done.', {
            position: "top-center"
        })
    }

    return (
        <div className='activity_button_container'>
            <button onClick={() => notify()} className='activity_button'>Activity Completed</button>
            <ToastContainer/>
        </div>
    )
}

export default ActivityButton