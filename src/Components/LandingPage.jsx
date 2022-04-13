import React from 'react';

// import images

import kleiner_schatz from '../Graphics/kleiner_schatz.jpg'
import photography from '../Graphics/Photography.jpeg';
import music from '../Graphics/Music.jpeg';
import blog from '../Graphics/blog.jpeg';

function LandingPage(props){

    return(
        <div className='container bg-white box-border w-full pt-6 pb-12 font-Josefin'>
            
            <div className='flex flex-row gap-10'>

                <div className='container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4 hover:grayscale' 
                    onClick={() => props.siteSelector('PhotographyPage')}
                    style={{backgroundImage: `url(${photography})`}}
                >
                    {/* <img src={photography} className={'object-cover'}>
                    </img> */}
                    <p className='text-3xl tracking-widest text-white'> 
                        Photography
                    </p>
                </div>
                <div className='container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4  hover:sepia'  
                    onClick={() => props.siteSelector('MusicPage')}
                    style={{backgroundImage: `url(${music})`}}
                >
                    <p className='text-3xl tracking-widest text-white'>
                        Videography
                    </p>
                </div>

            </div>

            <div className='flex flex-row gap-10'>

                <div className='container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4  hover:sepia'
                    onClick={() => props.siteSelector('BlogPage')}
                    style={{backgroundImage: `url(${blog})`}}
                >
                    <p className='text-3xl tracking-widest text-white'>
                        Blog
                    </p>
                </div>
                
                <div className='container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4  hover:sepia'
                    onClick={() => props.siteSelector('AboutPage')}
                    style={{backgroundImage: `url(${kleiner_schatz})`}}
                >
                    <p className='text-5xl tracking-widest text-white'>
                        About Jayden
                    </p>
                </div>

            </div>

        </div>       
    )
}

export default LandingPage