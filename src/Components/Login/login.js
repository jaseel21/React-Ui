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
            
            <button id="inp4">Login</button>
            <img src="https://i.postimg.cc/YqVPfgg4/img-01.png" alt="" />
        </form>
    </div>
  )
}

export default login