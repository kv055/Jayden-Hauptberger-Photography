import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function PhotographyMusic(){
    const [CurrentPage,setCurrentPage] = useState('PhotographyMain')
    return( 
        <div className='container bg-white box-border w-full p-12 mt-auto'>
            <div className='flex flex-row gap-10'>
                
                <div className='bg-amber-400 container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4 hover:grayscale' 
                    >
                        
                        <p className='text-3xl tracking-widest text-white'> 
                            Live
                        </p>
                </div>

                <div className='bg-amber-400 container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4  hover:sepia'
                    >
                        <p className='text-3xl tracking-widest text-white'>
                            Artists/Promo
                        </p>
                 </div>

            </div>
        </div>       
    )
}

export default PhotographyMusic