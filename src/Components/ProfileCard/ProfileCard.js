import React from 'react'
import './ProfileCard.css'

function ProfileCard() {
  return (
    <div className='cardContainer'>
        <div class="circle-1"></div>
    <div class="circle-2"></div>
    <div class="card">
        <img src="https://novastela.com/wp-content/uploads/2021/05/steve-and-denesh.png" class="user" alt=""/>
        <h1>Muhammed Mishab</h1>
        <span class="text1">S/o Abdulla</span>
        <div class="line"></div>
        <div class="text2">
            <div class="form-f">
                <div class="form1">
                    <p><b>Register Number</b></p>
                    <p><b>Address</b></p>
                </div>
                <div class="coma1">
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                </div>
                <div class="data1">
                    <p>313</p>
                    <p>Nalakath (h) changaleeri mothikkal (po) mannarkkad palakkad (dis) kerala</p>
                </div>
            </div>
            <div class="form-l">
                <div class="form">
                    <p><b>Language</b></p>
                    <p><b>Date of birth</b></p>
                    <p><b>Phone number</b> </p>
                    <p>Whatsapp number<b></b></p>
                    <p><b>Year</b></p>
                    <p><b>Text book</b> </p>
                    <p><b>Certificate</b> </p>
                    <p><b>Exam</b> </p>
                    <p><b>Have we contacted you ?</b></p>
                </div>
                <div class="coma">
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                </div>
                <div class="data">
                    <p>Arabic</p>
                    <p>02/02/2002</p>
                    <p>6238661924</p>
                    <p>6238661924</p>
                    <p>1st Year</p>
                    <p>Not received</p>
                    <p>Not received</p>
                    <p>Not Attented</p>
                    <p>No</p>
                </div>
            </div>
            <div class="tags">
                <a href="#"><i class="fa-solid fa-pen-to-square icon-1"></i></a>
                <a href="#"><i class="fa-solid fa-trash icon-2"></i></a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProfileCard