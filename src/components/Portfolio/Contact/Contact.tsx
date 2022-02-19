import React, {useContext, useEffect} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import {AppContext} from '../../../App'
import {getPanelOffset} from '../../shared/getPanelOffset'
import {ContactStyled} from './Contact.style'
import Socials from './Socials/Socials'

interface SectionProps {
  setContactOffset: (val: number) => void
}

const Contact = ({setContactOffset}: SectionProps) => {
  const {contact} = useContext(AppContext)
  const {title, contactTitle, socials} = contact

  const loadContact = () => {
    const phone = '804.836.2326'
    const phoneDiv = document.querySelector('.insert-phone')
    const user = 'scottmurphy1111'
    const domain = 'gmail.com'
    const emailDiv = document.querySelector('.insert-email')

    if (phoneDiv)
      phoneDiv.innerHTML = `<a href="tel:${phone}">${
        phone || '804.836.2326'
      }</a>`
    if (emailDiv)
      emailDiv.innerHTML = `<a target="_blank" href="mailto:${user}@${domain}">${user}@${domain}</a>`
  }

  useEffect(() => {
    loadContact()
  }, [])

  useEffect(() => {
    setContactOffset(getPanelOffset('.contact'))
  }, [setContactOffset])

  return (
    <SectionPanel data-section="contact" className="contact">
      <ContactStyled>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="special-note fade-item">
                <h2 className="category-title">{title}</h2>
                <p>TO PUT IT SIMPLY, I LOVE TO CODE.</p>
                <p>
                  WHETHER I&rsquo;M DOING FREELANCE WORK OR EMBEDDED INTO A
                  PRODUCTION TEAM, I FIND GREAT JOY IN CONQUERING THE CHALLENGES
                  OF BRINGING USER EXPERIENCES TO LIFE.
                </p>
                <p>
                  PLEASE <span style={{color: '#fff'}}>CLICK BELOW </span>TO
                  SEND ME A NOTE OR DROP ME A LINE.
                </p>
                <p>
                  I LOOK FORWARD TO HEARING FROM YOU AND PARTNERING TOGETHER IN
                  THE FUTURE.
                </p>
              </div>
              <div className="block fade-item">
                <div className="contact-info">
                  <ul>
                    <li className="insert-phone" />
                    <li className="insert-email" />
                  </ul>
                </div>
              </div>
              <div className="block fade-item">
                <div className="social">
                  <Socials data={socials} />
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </ContactStyled>
    </SectionPanel>
  )
}

export default Contact
