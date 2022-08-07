import React from 'react'
import projects from '../../seeders/projects'

export const Project = () => {
  return (
    <div>
      {projects.map(i=> (
        <p>{i.title}</p>
      ))}
    </div>
  )
}
