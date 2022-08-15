import React from 'react'
import "../Intro.css"
import reactangle from '../image/rectangle.png'

const Projects = () => {
  return (
    <>
        <h2 className='text-4xl py-20 font-bold text-center'>My Projects</h2>
        <div className='project_space grid grid-cols-1 gap-y-10 lg:grid lg:grid-cols-3 items-center text-center justify-items-center'>
          <div> <a href='google.com'><img src={reactangle} alt = "placeholder" className='sm:max-w-xs xl:max-w-md'></img></a></div>
          <div> <a href='google.com'><img src={reactangle} alt = "placeholder" className='sm:max-w-xs xl:max-w-md'></img></a></div>
          <div> <a href='google.com'><img src={reactangle} alt = "placeholder" className='sm:max-w-xs xl:max-w-md'></img></a></div>
        </div>
    </>
  )
}

export default Projects