import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Button } from 'technotic';
import Home from './Home';

function Profile() {
    return (
        <div>
            This is the profile page
            <Button btnType={'primary'} link={'/'} element={<home/>}>
                <p style={{ fontSize: '15px' }}>Home Profile</p>
            </Button>
        </div>
    )
}

export default Profile
