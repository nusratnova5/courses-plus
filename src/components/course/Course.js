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
    <div className='m-2 p-1'> 
      <div className='bg-gray-50	p-5 text-left	rounded-2xl shadow-lg'>
        <div className='flex justify-center bg-gray-200 rounded-lg my-3 p-2'>
          <img className='justify-center items-center' src={picture} alt=""></img>
        </div>

        <h2 className='font-bold text-lg text-slate-900'>{name}</h2>
        <p className='text-gray-500'>{newAbout}</p>
        <p className='text-lg'>Time: {time}</p>
        <p className='text-center'><button className='bg-purple-600 text-slate-100	px-20 py-2 rounded-lg mt-3 w-3/4' onClick={()=>handleClick(time)}>ADD</button></p>
      </div>
    </div>
  )
}

export default Course