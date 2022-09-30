import React, { useEffect, useState } from 'react'
import Course from '../course/Course'
import Sidebar from '../sidebar/Sidebar'
import './Home.css'
function Home() {
    const [courses, setCourses] = useState([])
    const [sumTime, setSumTime] = useState(0)
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    
    return (
    <div className='home-container'>
      {/* courses */}
      <div className='course'>
        <h1>Courses</h1>
        
        <p>Sum Time: {sumTime }</p>
        
        <div className='grid grid-cols-4'>
          <div className='container col-span-3 grid grid-cols-3 gap-5 p-5'>
            {
            courses.map(course => <Course
            key={course._id}
            course={course}
            time = {{setSumTime,sumTime}}
            />)
            }
          </div>
        </div>
      </div>
      {/* side bar */}
      <div className='sidebar'>
        <Sidebar time={sumTime}></Sidebar>
      </div>

    </div>
  )
}

export default Home