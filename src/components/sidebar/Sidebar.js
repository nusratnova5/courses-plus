import { useState } from 'react'
import user from '../../img/user.png'
function Sidebar(props) {
  const sumTime = props.time
  const [breakTime, setBreakTime] = useState(0)
  return (
    <div>
        {/* use info */}
        <div className='flex p-3 m-3 rounded-2xl font-bold bg-purple-100'>
            <div>
                <img className='w-16' src={user} alt="" />
            </div>
            <div className='ml-3 justify-center items-center w-full h-full '>
                <p className='font-bold'>Nusrat Nova</p>
                <p className='text-sm font-thin'>Dhaka/Bangladesh</p>
            </div>
        </div>

        {/* information */}
        <div className='flex justify-between text-center m-3 mb-10  rounded-2xl font-bold text-xl bg-purple-100 text-zinc-800'>
            <div className='p-3 mx-3'>
                <p>75</p>
                <p>Weight</p>
            </div>
            <div className='p-3 mx-3'>
                <p>6.5</p><p>Height</p>
            </div>
            <div className='p-3 mx-3'>
                <p>25</p><p>Age</p>
            </div>
        </div>
        
        <h1 className='mx-4 text-2xl font-bold text-slate-700'>Add Break: </h1>
        <div className='flex justify-around bg-purple-50  rounded-2xl my-3 m-3 p-4 '>
            <button className='text-lg bg-purple-500 rounded-lg px-5 py-3 text-slate-50' onClick={()=>setBreakTime(10)}>10</button>
            <button className='text-lg bg-purple-500 rounded-lg px-5 py-3 text-slate-50' onClick={()=>setBreakTime(20)}>20</button>
            <button className='text-lg bg-purple-500 rounded-lg px-5 py-3 text-slate-50' onClick={()=>setBreakTime(30)}>30</button>
            <button className='text-lg bg-purple-500 rounded-lg px-5 py-3 text-slate-50' onClick={()=>setBreakTime(40)}>40</button>
            <button className='text-lg bg-purple-500 rounded-lg px-5 py-3 text-slate-50' onClick={()=>setBreakTime(50)}>50</button>
        </div>
        
        <div className='mx-4 mt-8'>
            <h1 className='text-2xl font-bold text-slate-700'>Courses Details:</h1>
            <div>
                <div className='bg-purple-50 p-5 rounded-2xl my-2'>
                    <h2 className='text-lg font-semibold'>Course Time: {sumTime}</h2>
                </div>
                <div className='bg-purple-50 p-5 rounded-2xl my-2'>
                    <h2 className='text-lg font-semibold'>Break Time: {breakTime}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar