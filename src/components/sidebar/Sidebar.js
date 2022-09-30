import { useState } from 'react'

function Sidebar(props) {
  const sumTime = props.time
  const [breakTime, setBreakTime] = useState(0)
  return (
    <div>
        <div>
            <h1>Add a Break----</h1>
            <div>
                <button onClick={()=>setBreakTime(10)}>10m</button>
                <button onClick={()=>setBreakTime(20)}>20m</button>
                <button onClick={()=>setBreakTime(30)}>30m</button>
                <button onClick={()=>setBreakTime(40)}>40m</button>
                <button onClick={()=>setBreakTime(50)}>50m</button>
            </div>
        </div>
        <div>
            <h1>Course Details----</h1>
            <h2>Course Time: {sumTime}hr</h2>
            <h2>Break Time: {breakTime}m</h2>
        </div>
    </div>
  )
}

export default Sidebar