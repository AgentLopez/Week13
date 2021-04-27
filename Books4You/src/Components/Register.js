import React, { useState } from 'react'

function Register(props) {

    const [user, setUser] = useState({})

    const changing = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const joinUs = () => {
        fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    console.log('Registered!')
                    props.history.push('/login')
                }
            })
    }



    return (
<div className="books">
        <div>
            <h1>Register</h1>
            <br />
            <input type="text" onChange={changing} placeholder="User Name" name="userName" />
            <br />
            <input type="password" onChange={changing} placeholder="Password" name="password" />
            <br />
            <button onClick={joinUs}>Register</button>
        </div>
</div>
    )
}

export default Register