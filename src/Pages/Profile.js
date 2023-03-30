import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Button } from 'technotic';

function Profile() {
    // let navigate = useNavigate();
    return (
        <div>
            This is the profile page
            <Button link={'/profile'} element={<Profile />}>
                <p style={{ fontSize: '15px' }}>profile</p>
            </Button>
        </div>
    )
}

export default Profile
