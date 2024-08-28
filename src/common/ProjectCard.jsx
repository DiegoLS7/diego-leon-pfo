import React from 'react'

function ProjectCard({src, link, h3, desc, detalle}) {
  return (
    <a href={link} alt
        target='_blank'>
        <h2>{h3}</h2>
        <img className="hover" 
        src={src} alt={`${h3}`} /> 
        <h3>{desc}</h3>
        <p>{detalle}</p>

    </a>
  )
}

export default ProjectCard
