import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { getPanelOffset } from './getPanelOffset';

const Skills = (params: any) => {
  const { skills } = useContext<any>(AppContext);
  const { title, skillset } = skills;

  useEffect(() => {
    params.setSkillsOffset(getPanelOffset('.skills'));
  }, [])

  return (
      <section
        className='skills section-panel container-fluid'
        data-section='skills'
      >
        <div className="wrap">
          <div className='row'>
            <div className='col-xs-12'>
              <h2 className='category-title'>{title}</h2>
              <ul className='skillset'>
                {skillset.map((skill: any, id: number) => (
                  <li key={id + 1}>
                    <div className="image-container">
                      <img src={`${process.env.PUBLIC_URL}${skill.image}`} />
                    </div>
                    <ul className="skills-array">
                      {skill.skillsArray.map((item: any) => <li key={item}>{item}</li>)}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Skills;

