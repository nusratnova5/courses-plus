import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Course from '../course/Course'
import Sidebar from '../sidebar/Sidebar'
import './Home.css'
import Blogs from '../blogs/Blogs'
function Home() {
    const [courses, setCourses] = useState([])
    const [sumTime, setSumTime] = useState(0)
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    
    return (
    <div className=''>
      <div className='flex sm:flex-col md:flex-row lg:flex-row '>
      {/* courses */}
      <div className='bg-gray-100'>
        <div className='text-3xl ml-8 mt-7 flex'>
          <FontAwesomeIcon className='mr-3' icon={faGraduationCap} />
          {/* <FontAwesomeIcon icon="fa-regular fa-graduation-cap" /> */}
          <h1 className=''>Welcome to Courses PLUS</h1>
        </div>
        
        <div className='grid grid-cols-3 md:grid-cols-2'>
          <div className='container col-span-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5'>
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
      <div className='w-1/3'>
        <Sidebar time={sumTime}></Sidebar>
      </div>

     </div>
     <div className='flex w-2/3 items-center mx-auto'>
            <Blogs></Blogs>
     </div>
    </div>
  )
}

export default Home