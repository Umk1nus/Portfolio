import React from 'react'
import './Project.css'
import projects from '../../seeders/projects'
import { Proj } from '../../components/Proj/Proj'

export const Project = () => {
  return (
    <div className='project'>
      {projects.map(proj => (
        <Proj key={proj.id} {...proj}/>
      ))}
    </div>
  )
}
