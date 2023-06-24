import React from 'react'
import './login.css'

function login() {
  return (
    <div>
        <form action="submit" className='loginForm'>
            <div class="in1">
                <input type="text" id="inp1" required/>
                <label for="inp1">Email</label>
                <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div class="in2">
                <input type="password" id="inp2" required/>
                <label for="inp2">Password</label>
                <ion-icon name="lock-closed-outline"></ion-icon>
            </div>
            <div class="checkk">
                <div class="in3">
                    <input type="checkbox" id="inp3" required/>
                    <label for="inp3">Remember Me</label>
                </div>
            </div>
            <input type="submit" id="inp4"/>
            <h1>Login</h1>
            <h5>Sign Up</h5>
        </form>
    </div>
  )
}

export default login