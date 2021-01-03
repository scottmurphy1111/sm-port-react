import React, { useState } from 'react'

const Project = (params: any) => {
  const [isShown, setIsShown] = useState(false);
  const {project} = params;

  return (
    <>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div className="base-item" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style={{backgroundImage: `url(${process.env.PUBLIC_URL}${project.image})`}}>
        <div className="info-bar">
          <h3>{project.projectName}</h3>
        </div>
        <div className="slide-item" data-active={isShown}>
          <p className="tech"><span>Tech: </span>{project.tech}</p>
          <p className="capabilities"><span>Capabilities: </span>{project.capabilities}</p>
        </div>
      </div>
    </a>
    </>
  )
}

export default Project;