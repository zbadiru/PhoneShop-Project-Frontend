import React from 'react'
import {handleInputChange} from '../context'

export default function LoginForm(event, value) {
    const {handleUserChange, handleInputChange} = value
    const shit = (e) => {
        e.preventDefault()
        console.log("this suck balls");
    }
    return (
        <form onSubmit={handleInputChange}>
            <input
                id="username"
                onChange={() => handleInputChange}
                type="text"
                placeholder="username"
            /> <br></br>
            <input
                id="password"
                onChange={() => handleInputChange}
                type="password"
                placeholder="password"
            /><br></br>
            <input type="submit" value="Log In" />
        </form>
        )
}

