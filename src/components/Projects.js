import React from 'react'
import "../Intro.css"
import ProjectsDetail from './ProjectDescription'


function Block(props){
  return <div> <a href= {props.link}><img src={props.thumbnail} alt = {props.projectName} className='sm:max-w-xs xl:max-w-md hover:scale-95 active:scale-90 transition '/></a></div>
}

function BlockPlate(value){
  return <Block link = {value.link} thumbnail = {value.thumbnail} projectName = {value.projectName}/>
}

const Projects = () => {
  return (
    <>
        <h2 className='text-4xl py-32 font-bold text-center'>My Projects</h2>
        <div className='project_space grid grid-cols-1 gap-y-10 lg:grid lg:grid-cols-3 items-center text-center justify-items-center'>
        {ProjectsDetail.map(BlockPlate)}
        </div>
    </>
  )
}

export default Projects
