import React from 'react'
import './Header.css'
import punklogo from '../assets/header/cryptopunk-logo.png'

const Header = () => {
    return (
        <div className='Header' >
            <div className='LogoContainer' >
                <img src={punklogo} className='punklogo' alt='' />
            </div>
        </div>
    )
}

export default Header

