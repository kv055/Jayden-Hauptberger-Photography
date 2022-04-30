import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Photography_Music_Live(){
    const [CurrentPage,setCurrentPage] = useState('PhotographyMain')
    return( 
        <div className='container bg-white box-border w-full p-12 mt-auto'>
            <div className='flex flex-col gap-10'>
                
                <div className='bg-amber-400 container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4 hover:grayscale' 
                    >
                        <p className='text-3xl tracking-widest text-white'> 
                            Konzert 1   
                        </p>
                </div>

                <div className='bg-amber-400 container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4  hover:sepia'
                    >
                        <p className='text-3xl tracking-widest text-white'>
                            Konzert 2 
                        </p>
                 </div>

                 <div className='bg-amber-400 container content-center box-border rounded-md h-96 w-2/3 p-40 mt-4  hover:sepia'
                    >
                        <p className='text-3xl tracking-widest text-white'>
                            Konzert 3 
                        </p>
                 </div>

            </div>
        </div>       
    )
}

export default Photography_Music_Live