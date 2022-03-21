import {handleFadeIn} from 'components/shared/FadeItem/handleFadeIn'
import {ProjectItem} from 'models/project-item'
import {useEffect, useRef, useState} from 'react'

const Project = ({
  projectName,
  link,
  tech,
  capabilities,
  image,
  description,
  computedStyle,
}: ProjectItem) => {
  const [isShown, setIsShown] = useState(false)
  const projectRef = useRef(null)

  useEffect(() => {
    handleFadeIn(projectRef)
  }, [])

  return (
    <div ref={projectRef} className="project-item" style={computedStyle}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="base-item"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          style={{backgroundImage: `url(${process.env.PUBLIC_URL}${image})`}}
        >
          <div className="info-bar">
            <h3>{projectName}</h3>
          </div>
          <div className="slide-item" data-active={isShown}>
            <p className="tech">
              <span>Tech: </span>
              {tech}
            </p>
            <p className="capabilities">
              <span>Capabilities: </span>
              {capabilities}
            </p>
          </div>
        </div>
      </a>
      <p className="description">{description}</p>
    </div>
  )
}

export default Project
