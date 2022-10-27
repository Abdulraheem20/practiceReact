import React from 'react'
import './styles/Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
const FooterMQ = () => {
  return (
    <div className='footer'>
        <h1>LOGO</h1>
        <div className='social-media'>
            <div>
            <FaFacebook className='fb'/>
            </div>
            <div>
            <AiFillInstagram className='insta'/>
            </div>
            <div>
            <AiFillTwitterCircle className='tweet'/>
            </div>
        </div>
    </div>
  )
}

export default FooterMQ