import React from 'react';

function Header(props){
    
    let subHeaderMenu = <div className="grid grid-cols-4 gap-4">
        <p className='text-white'>Photography</p>
        <p className='text-white'>Videography</p>
        <p className='text-white'>Blog</p>
        <p className='text-white'>About</p>
    </div>
    
    let conditionalSubHeaderMenu = props.curentSelectedSite === 'LandingPage' ?
        subHeaderMenu :
        null

    return(
        <div className='relative mx-auto bg-neutral-800 pt-2 rounded-b-md w-full font-Josefin'>
            
            <h1 className='text-3xl tracking-widest text-white' 
                onClick={() => props.siteSelector('LandingPage')}
            > 
                Jayden Hauptberger
            </h1>

            <div className="grid grid-cols-4 gap-4">
                <p 
                    className='text-white' 
                    onClick={() => props.siteSelector('PhotographyPage')}
                >
                    Photography
                </p>

                <p 
                    className='text-white'
                    onClick={() => props.siteSelector('MusicPage')}
                >
                    Videography
                </p>

                <p 
                    className='text-white'
                    onClick={() => props.siteSelector('BlogPage')}
                >
                    Blog
                </p>

                <p 
                    className='text-white'
                    onClick={() => props.siteSelector('AboutPage')}
                >
                    About
                </p>

            </div>

            {/* {conditionalSubHeaderMenu} */}
           
        </div>       
    )
}

export default Header