import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Photography(){
    const [CurrentPage,setCurrentPage] = useState('PhotographyMain')
    return(
        <div className='container bg-white box-border w-full p-12 mt-auto'>
            <div className='flex flex-row gap-10'>
                <div className='bg-amber-400 container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4 hover:grayscale' 
                        onClick={() => setCurrentPage('Music Photography')}
                        // style={{backgroundImage: `url(${photography})`}}
                    >
                        {/* <img src={photography} className={'object-cover'}>
                        </img> */}
                        <p className='text-3xl tracking-widest text-white'> 
                            Music Photography
                        </p>
                    </div>
                    <div className='bg-amber-400 container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4  hover:sepia'  
                        onClick={() => setCurrentPage('Events')}
                        // style={{backgroundImage: `url(${music})`}}
                    >
                        <p className='text-3xl tracking-widest text-white'>
                            Events
                        </p>
                    </div>
                </div>
            <div className='flex flex-row gap-10'>
                <div className='bg-amber-400 container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4 hover:grayscale' 
                    onClick={() => setCurrentPage('Portraits')}
                    // style={{backgroundImage: `url(${photography})`}}
                >
                    {/* <img src={photography} className={'object-cover'}>
                    </img> */}
                    <p className='text-3xl tracking-widest text-white'> 
                        Portraits
                    </p>
                </div>
                <div className='bg-amber-400 container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4  hover:sepia'  
                    onClick={() => setCurrentPage('Other')}
                    // style={{backgroundImage: `url(${music})`}}
                >
                    <p className='text-3xl tracking-widest text-white'>
                        Other
                    </p>
                </div>
            </div>
        </div>       
    )
}

export default Photography


// <div className='bg-amber-400 container content-center box-border rounded-xl h-96 w-2/3 p-12 mt-4 border-4'>
//                 <Carousel fade>
//                     <Carousel.Item>
//                         <img
//                         className="d-block w-100"
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/640px-Google_Images_2015_logo.svg.png"
//                         alt="First slide"
//                         />
//                         <Carousel.Caption>
//                         <h3>Pimml</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <img
//                         className="d-block w-100"
//                         src="https://preview.redd.it/zffkrxqyb7681.png?width=640&crop=smart&auto=webp&s=f63a5cd33215f35bbe15801e61f391113b4536ee"
//                         alt="Second slide"
//                         />

//                         <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <img
//                         className="d-block w-100"
//                         src="https://i.stack.imgur.com/2OYvF.png"
//                         alt="Third slide"
//                         />

//                         <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                 </Carousel>
//             </div>