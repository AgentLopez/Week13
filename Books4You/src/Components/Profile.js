import { useState, useEffect } from 'react'


function Profile (props) {

    const [user, setUser] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('jsonwebtoken')

        fetch('http://localhost:8000/profile', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(user => {
                setUser(user)
            })
    }, [])

const onChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
}

const clickMail = () => {
    const token = localStorage.getItem('jsonwebtoken')

        fetch('http://localhost:8000/profile', {
            method: 'POST',
            headers: {
                'email': user.email,
                'authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(response => {
                if (response) {
                    props.history.push('/')
                }
            })
}


    return (
        <div>
            <h1>Profile</h1>
            <input type="text" name = "email" onChange={onChange} value={user.email} />
            <button onClick={clickMail}>Update Email</button>
        </div>
    )
}



export default (Profile)