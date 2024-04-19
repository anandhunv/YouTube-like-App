import React, { useState } from 'react'
import { findNthPrime } from '../utils/helper';

const Demo = () => {

    const [text,setText]=useState(0);

    const prime=findNthPrime(text)
  return (
    <div className='w-96 h-64 border border-neutral-700 mx-8 my-4 flex flex-col items-baseline  '>

        <input type='text' placeholder='Type....' className='outline-none  px-3  bg-neutral-700 m-3'
        
        value={text} onChange={(e)=>setText(e.target.value)}
        />
        <div>nth value: {prime}</div>
    </div>
  )
}

export default Demo