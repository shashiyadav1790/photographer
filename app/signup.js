"use client"
import { useState } from 'react';




export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 2);
  }
  function decerement(){
    setCountminus(count -1)
  }
  return (
    <div className='flex flex-row justify-center items-center gap-4 '>
        <button className='bg-black rounded text-white p-5' onClick={increment}>
      Count +2
    </button>
      <button className='bg-black rounded text-white p-5' onClick={decerement}>
       {count}
      </button>

    </div>
  
  );
}
