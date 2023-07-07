
import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import 'vanilla-tilt/dist/vanilla-tilt.min.js';
import './ProfileCard.css'

const ProfileCard = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }, []);

  return (
    <div className='cardContainer'>
        <div className="circle-1"></div>
    <div className="circle-2"></div>
    <div ref={tiltRef} className="card">
        <img src="https://novastela.com/wp-content/uploads/2021/05/steve-and-denesh.png" className="user" alt=""/>
        <h1>Muhammed Mishab</h1>
        <span className="text1">S/o Abdulla</span>
        <div className="line"></div>
        <div className="text2">
            <table> 
            <tr className='contant space'>
                    <td className='data-name'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td className='coma'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr className='contant'>
                    <td className='data-name'>Register Number</td>
                    <td className='coma'>:</td>
                    <td className='data-value'> 313</td>
                </tr>
                <tr className='contant'>
                    <td className='data-name'>Address</td>
                    <td className='coma'>:</td>
                    <td className='data-value'> Nalakath (h) <br /> changaleeri mothikkal (po) mannarkkad palakkad (dis) kerala</td>
                </tr>
                <tr className='contant'>
                    <td className='data-name'>Subject</td>
                    <td className='coma'>:</td>
                    <td className='data-value'> Arabic</td>
                </tr>
                <tr className='contant'>
                    <td className='data-name'>Date of birth</td>
                    <td className='coma'>:</td>
                    <td className='data-value'> 02/02/2002</td>
                </tr>
                <tr className='contant'>
                    <td className='data-name'>Phone number</td>
                    <td className='coma'>:</td>
                    <td className='data-value'> 6238661924</td>
                </tr>
                <tr className='contant'>
                    <td className='data-name'>Whatsapp Number</td>
                    <td className='coma'>:</td>
                    <td className='data-value'> 6238661924</td>
                </tr>
                <tr className='contant'>
                    <td className='data-name'>Year</td>
                    <td className='coma'>:</td>
                    <td className='data-value'> 1st Year</td>
                </tr>
                <tr className='contant'>
                    <td className='data-name'>Text book</td>
                    <td className='coma'>:</td>
                    <td className='data-value'> Not received</td>
                </tr>
                <tr className='contant'>
                    <td className='data-name'>Certificate</td>
                    <td className='coma'>:</td>
                    <td className='data-value'> Not received</td>
                </tr>
                <tr className='contant'>
                    <td className='data-name'>Exam</td>
                    <td className='coma'>:</td>
                    <td className='data-value'> Not received</td>
                </tr>
                <tr className='contant'>
                    <td className='data-name'>Have we contacted you ? </td>
                    <td className='coma'>:</td>
                    <td className='data-value'> No</td>
                </tr>
            </table>
            {/* <div className="form-data-upper">
                <div className="form1">
                    <p><b>Register Number</b></p>
                    <p><b>Address</b></p>
                </div>
                <div className="data1">
                    <p><span>: </span> 313</p>
                    <p><span>: </span> Nalakath (h) <br /> changaleeri mothikkal (po) mannarkkad palakkad (dis) kerala</p>
                </div>
            </div>
            <div className="form-under">
                <div className="form2">
                    <p><b>Subject</b></p>
                    <p><b>Date of birth</b></p>
                    <p><b>Phone number</b> </p>
                    <p><b>Whatsapp number</b></p>
                    <p><b>Year</b></p>
                    <p><b>Text book</b> </p>
                    <p><b>Certificate</b> </p>
                    <p><b>Exam</b> </p>
                    <p><b>Have we contacted you ?</b></p>
                </div>
                <div className="data2">
                    <p><span>: </span> Arabic</p>
                    <p><span>: </span> 02/02/2002</p>
                    <p><span>: </span> 6238661924</p>
                    <p><span>: </span> 6238661924</p>
                    <p><span>: </span> 1st Year</p>
                    <p><span>: </span> Not received</p>
                    <p><span>: </span> Not received</p>
                    <p><span>: </span> Not Attented</p>
                    <p><span>: </span> No</p>
                </div>
            </div> */}
            <div className="tags">
                <a href="#"><i class="fa-solid fa-pen-to-square icon-1"></i></a>
                <a href="#"><i class="fa-solid fa-trash icon-2"></i></a>
            </div>
        </div>
    </div>
    </div>
  );
};

export default ProfileCard;
