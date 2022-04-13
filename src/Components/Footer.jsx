import React from 'react';
import Instagram from '../Graphics/Instagram.png'
import Facbook from '../Graphics/Facebook.png'

function Footer(){

    return(
        <div className='bg-neutral-800 p-2 rounded-t-md'>
            <h5 className='font-Josefin text-white'>
                Jayden Hauptberger Copyright blah blah
            </h5>
            <div className="grid grid-cols-3 gap-3">
                <a href="https://www.instagram.com/jaydenhauptberger.photography/">
                    <img className='w-8 h-8 m-4'src={Instagram} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/jaydenhauptberger.photography">
                    <img className='w-8 h-8 m-4'src={Facbook} alt="Facbook"/>
                </a>
                <a href="mailto:jayden.hauptberger@gmail.com">
                    <p>jayden.hauptberger@gmail.com</p>
                </a>
                
            </div>

        </div>       
    )
}

export default Footer