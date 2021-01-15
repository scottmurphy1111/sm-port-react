import { AppContext } from '../../App';
import React, { useContext, useEffect } from 'react';
import { getPanelOffset } from './getPanelOffset';

interface SectionProps {
  setSkillsOffset: (val: number) => void;
  goToNextSection: (val: string) => void;
}

const Skills = ({setSkillsOffset, goToNextSection}: SectionProps) => {
  const { skills } = useContext<any>(AppContext);
  const { title, skillset } = skills;

  useEffect(() => {
    setSkillsOffset(getPanelOffset('.skills'));
  }, [setSkillsOffset]);

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
                <li key={id + 1} className="fade-item">
                  <div className="image-container">
                    <img alt="skills group" src={`${process.env.PUBLIC_URL}${skill.image}`} />
                  </div>
                  <ul className="skills-array">
                    {skill.skillsArray.map((item: any) => <li key={item}>{item}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className='see-next' onClick={() => goToNextSection('projects')}>
            <img alt="see next" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/see-more.svg`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

