import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Login(props) {

    const [user, setUser] = useState({userName: "Orange", password: "Orange"})

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const clicky = () => {

        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then(result => {
                if (result.success) {
                    const token = result.token
                    localStorage.setItem("jsonwebtoken", token)
                    props.onLogin(result.UserId)
                    props.history.push('/')
                }
            })
    }

    const guestClick = () => {
        const guest = 'Orange'
        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then(result => {
                if (result.success) {
                    const token = result.token
                    localStorage.setItem("jsonwebtoken", token)
                    props.onLogin(result.UserId)
                    props.history.push('/')
                }
            })
    }

    return (
        <div className="books">
            <div>
                <h2>Login</h2>
                <br />
                <input type="text" placeholder="User Name" onChange={onChange} name="userName" />
                <br />
                <input type="password" placeholder="Password" onChange={onChange} name="password" />
                <br />
                <button onClick={clicky}>Login</button>
                <br />
            New? <NavLink to="/register">Register Here</NavLink>
                <br />
                <br />
                <button onClick={guestClick}>Login as Guest</button>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (userId) => dispatch({ type: 'LOGIN', payload: userId })
    }
}

export default connect(null, mapDispatchToProps)(Login)