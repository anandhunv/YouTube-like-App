import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-screen absolute -mt-20 bg-zinc-900 h-screen flex flex-col justify-center items-center'>
<div className='flex flex-col  '>
    <input type='text' placeholder='Full Name' className='mb-4 outline-none w-[400px] h-11 rounded-md text-gray-900 px-3'/>
    <input type='email' placeholder='Email'className='mb-4 outline-none w-[400px] h-11 rounded-md text-gray-900 px-3'/>
    <input type='password' placeholder='Password'className='mb-4 outline-none w-[400px] h-11 rounded-md text-gray-900 px-3'/>

    <button className=' bg-black p-3 rounded-lg'>Sign Up</button>
    <div className='flex justify-center text-zinc-600'>
        <h2>Already Have An Account?</h2>
    </div>

</div>
<div className='my-4'>Or</div>
<div>
   <Link to={"/"}><button className='bg-yellow-400 px-7 rounded-md py-2 font-roboto text-black '>Join as Guest</button>
</Link> 
</div>

    </div>
  )
}

export default Login