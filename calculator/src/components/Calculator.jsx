import React, { useEffect, useState } from 'react';

const Calculator = (numbers = '') => {

    const [inputNums, setInputNums] = useState('');
    const [total, setTotal] = useState(null);
    const [error, setError] = useState('');

    const getNumbers = (e) => {
        setInputNums(e.target.value);
    }

    const add = (e) => {
        e.preventDefault();
        console.log(inputNums, 'num');
        const numArray = inputNums.split(',');
        const checkNegatives = numArray.some((val) => +val < 0); //check any negative value is present
        if (checkNegatives) {
            setError('negative numbers not allowed')
        }


        const sum = numArray.reduce((acc, num) => {
            return acc + Number(num)
        }, 0);
        setTotal(sum);
        e.target.reset();
    };


    return <div className='bg-neutral-400 w-full h-full flex flex-col justify-center items-center'>

        <form className='w-full h-full max-w-[550px] max-h-[400px] flex flex-col gap-4 p-5' onSubmit={add}>
            <label htmlFor='numInput' className='text-[24px] text-center'>Enter Numbers with comma seperated</label>
            <input placeholder='1,2,3,4,5' id='numInput' className='mx-4 p-2 flex rounded-lg border-none' onChange={getNumbers} />
            {error && <p className='text-[12px] text-red-700'>{error}</p>}
            <input type='submit' value={'submit'} className='w-full max-w-[140px] mx-auto bg-red-600 px-4 py-2 rounded-lg cursor-pointer' />
        </form>

        {total && <h2>Total sum is: {total}</h2>}

    </div>
}

export default Calculator;