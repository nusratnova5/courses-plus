import React from 'react'

function Blogs() {
  return (
    <div className='my-6'>
      <h1 className='text-2xl font-bold'>Blogs</h1>
      <div className='my-3 p-4 bg-purple-50'>
        <h1 className='text-xl font-bold'>How does react work?</h1>
        <p className='text-lg'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
      </div>

      <div className='my-3 p-4 bg-purple-50'>
        <h1 className='text-xl font-bold'>What are the differences between props and state?</h1>
        <p className='text-lg'>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.
</p>
      </div>

      <div className='my-3 p-4 bg-purple-50'>
        <h1 className='text-xl font-bold'>Write down the uses of useEffect?</h1>
        <p className='text-lg'>Running on state change: validating input field
Running on state change: live filtering
Running on state change: trigger animation on new array value
Running on props change: update paragraph list on fetched API data update.</p>
      </div>

    </div>
  )
}

export default Blogs