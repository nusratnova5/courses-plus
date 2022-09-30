import React from 'react'

function Course(props) {
  const {name, picture,time} = props.course;
  const {setSumTime, sumTime} = props.time
  
  const handleClick = (time) =>{
    const newSum = sumTime + time
    setSumTime(newSum)
  }

  return (
    <div>
        <img src={picture} alt=""></img>
        <h2>Name: {name}</h2>
        <p>Time: {time}</p>
        <button onClick={()=>handleClick(time)}>ADD</button>
    </div>
  )
}

export default Course