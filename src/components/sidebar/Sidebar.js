import { useState } from 'react'
import user from '../../img/user.png'
function Sidebar(props) {
  const sumTime = props.time
  const [breakTime, setBreakTime] = useState(0)
  return (
    <div>
        {/* use info */}
        <div className='flex p-3 m-3 font-bold bg-purple-200'>
            <div>
                <img className='w-16' src={user} alt="" />
            </div>
            <div className='ml-3 justify-center items-center w-full h-full '>
                <p className='font-bold'>Nusrat Nova</p>
                <p className='text-sm font-thin'>Dhaka/Bangladesh</p>
            </div>
        </div>

        {/* information */}
        <div className='flex justify-between text-center m-3 font-bold text-xl bg-purple-200 text-zinc-800'>
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

        <div className='flex justify-around bg-gray-100	my-6 m-3 p-4 '>
            <button className='text-lg bg-purple-500 rounded-lg px-5 py-3 text-slate-50' onClick={()=>setBreakTime(10)}>10</button>
            <button className='text-lg bg-purple-500 rounded-lg px-5 py-3 text-slate-50' onClick={()=>setBreakTime(20)}>20</button>
            <button className='text-lg bg-purple-500 rounded-lg px-5 py-3 text-slate-50' onClick={()=>setBreakTime(30)}>30</button>
            <button className='text-lg bg-purple-500 rounded-lg px-5 py-3 text-slate-50' onClick={()=>setBreakTime(40)}>40</button>
            <button className='text-lg bg-purple-500 rounded-lg px-5 py-3 text-slate-50' onClick={()=>setBreakTime(50)}>50</button>
        </div>
        <div>
            <h2>Course Time: {sumTime}</h2>
            <h2>Break Time: {breakTime}</h2>
        </div>
    </div>
  )
}

export default Sidebar