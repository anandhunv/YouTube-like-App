import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addName } from '../utils/displaySlice';
import { USER_ICON } from '../utils/constants';

const You = () => {
    const nameRef = useRef(null);
    const dispatch = useDispatch();
    const name = useSelector(store => store.display.name);
    const [show, setShow] = useState(true);

    const handleSubmit = () => {
        const inputValue = nameRef.current.value;
        if (inputValue.trim() !== '') { // Check if input value is not empty
            dispatch(addName(inputValue));
            setShow(false);
        } else {
            // Optionally, you can display an error message or handle the empty input case in some other way
            console.log("Input value cannot be empty!");
        }
    };

    return (
        <div className='flex flex-col  md:justify-evenly md:mt-0 mt-16 justify-start md:mx-0 mx-5'>
            {show && (
                <div className="flex md:flex-row  flex-col justify-start ">
                    <input
                        type="text"
                        ref={nameRef}
                        className="w-80 h-8 outline-none text-slate-950 pl-3"
                        placeholder='Enter Your Name'
                    />
                    <button
                        className="md:ml-3 md:mt-0 mt-4 bg-yellow-600 px-3 rounded-md py-1"
                        onClick={handleSubmit} // Call handleSubmit function on button click
                    >
                        Submit
                    </button>
                </div>
            )}
            {!show && (
                <div>
                    <div className='w-auto md:w-[500px] flex  h-auto bg-slate-50 p-5'>
                        <img src={USER_ICON} alt='' className='h-14'/>
                        <h1 className='text-slate-900 ml-4 text-xl font-semibold '>{name}</h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default You;
