import { useState } from 'react'

function Sidebar(props) {
  const sumTime = props.time
  const [breakTime, setBreakTime] = useState(0)
  return (
    <div>
        <div className='flex justify-around bg-gray-100	my-3'>
            <div>
                <div>75</div><div>Weight</div>
            </div>
            <div>
                <div>6.5</div><div>Heiht</div>
            </div>
            <div>
                <div>25</div><div>Age</div>
            </div>
        </div>
        <div className='flex justify-around bg-gray-100	my-3 py-3'>
            <button onClick={()=>setBreakTime(10)}>10</button>
            <button onClick={()=>setBreakTime(20)}>20</button>
            <button onClick={()=>setBreakTime(30)}>30</button>
            <button onClick={()=>setBreakTime(40)}>40</button>
            <button onClick={()=>setBreakTime(50)}>50</button>
        </div>
        <div>
            <h2>Course Time: {sumTime}</h2>
            <h2>Break Time: {breakTime}</h2>
        </div>
    </div>
  )
}

export default Sidebar