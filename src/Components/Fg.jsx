import React, { useRef } from 'react'
import Card from './Card'

function Fg() {
    const ref=useRef(null);
    const data=[
        {
            description:"CS261",
            filesize:0.87,
            isOpen:true,
            tag: {
                downOrUp:true,
            }

        },
        {
            description:"EC261",
            filesize:2.3,
            isOpen:false,
            tag: {
                downOrUp:false,
            }

        },
        {
            description:"CS263",
            filesize:3.54,
            isOpen:true,
            tag: {
                downOrUp:false,
            }

        },
    ];
  return (
    <>

        <div ref={ref} className='fixed top-0 w-full h-screen z-[3] flex flex-wrap gap-10 p-10'>
            {
            data.map((item,index)=>(
                <Card data={item} refr={ref}/>
            ))
            }
        </div>

    </>
  )
}

export default Fg