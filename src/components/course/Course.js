import React from 'react'

function Course(props) {
  const {name, picture,time,about} = props.course;
  const {setSumTime, sumTime} = props.time
  const newAbout = about.substring(0,200)
  const handleClick = (time) =>{
    const newSum = sumTime + time
    setSumTime(newSum)
  }

  return (
    <div className='m-3'> 
      <div className='bg-gray-50	p-5 text-left	rounded-2xl shadow-lg'>
        <img src={picture} alt=""></img>
        <h2 className='font-bold'>Name: {name}</h2>
        <p className='text-gray-500'>{newAbout}</p>
        <p>Time: {time}</p>
        <p className='text-center'><button className='bg-amber-200	px-20 py-1 rounded-lg mt-3' onClick={()=>handleClick(time)}>ADD</button></p>
      </div>
    </div>
  )
}

export default Course