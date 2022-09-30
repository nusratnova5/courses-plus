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
    <div className='flex h-screen'>
      {/* courses */}
      <div className='bg-gray-100'>
        <div className='text-3xl'>
          <h1 className='ml-8 mt-7'>Welcome to Courses PLUS</h1>
          
        </div>
        
        <div className='grid grid-cols-3'>
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