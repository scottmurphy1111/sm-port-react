import {useAppContext} from 'common/context/useAppContext'
import CategoryTitle from 'components/shared/CategoryTitle'
import FadeItem from 'components/shared/FadeItem/FadeItem'
import {useEffect, useRef} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {SectionPanel} from 'styled-components/SectionPanel.style'

import {getPanelOffset} from '../../shared/getPanelOffset'
import {ContactStyled} from './Contact.style'
import ContactBlock from './ContactBlock'
import Socials from './Socials/Socials'

interface SectionProps {
  setContactOffset: (val: number) => void
}

const Contact = ({setContactOffset}: SectionProps) => {
  const {state, dispatch} = useAppContext()
  const {title, socials} = state.contact

  const sectionRef = useRef(null)

  useEffect(() => {
    if (state.contact && sectionRef) {
      dispatch({type: 'SET_SECTION_REF', payload: sectionRef})
    }
  }, [state.contact, sectionRef])

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
    <SectionPanel data-section="contact" className="contact" ref={sectionRef}>
      <ContactStyled>
        <Grid>
          <Row>
            <Col xs={12}>
              <FadeItem>
                <CategoryTitle title={title} computedStyle={undefined} />
              </FadeItem>
              <div className="special-note">
                <FadeItem>
                  <ContactBlock computedStyle={undefined}>
                    <p>TO PUT IT SIMPLY, I LOVE TO CODE.</p>
                  </ContactBlock>
                </FadeItem>
                <FadeItem>
                  <ContactBlock computedStyle={undefined}>
                    <p>
                      WHETHER I&rsquo;M DOING FREELANCE WORK OR EMBEDDED INTO A
                      PRODUCTION TEAM, I FIND GREAT JOY IN CONQUERING THE
                      CHALLENGES OF BRINGING USER EXPERIENCES TO LIFE.
                    </p>
                  </ContactBlock>
                </FadeItem>
                <FadeItem>
                  <ContactBlock computedStyle={undefined}>
                    <p>
                      PLEASE <span style={{color: '#fff'}}>CLICK BELOW </span>
                      TO SEND ME A NOTE OR DROP ME A LINE.
                    </p>
                  </ContactBlock>
                </FadeItem>
                <FadeItem>
                  <ContactBlock computedStyle={undefined}>
                    <p>
                      I LOOK FORWARD TO HEARING FROM YOU AND PARTNERING TOGETHER
                      IN THE FUTURE.
                    </p>
                  </ContactBlock>
                </FadeItem>
              </div>
              <FadeItem>
                <ContactBlock computedStyle={undefined}>
                  <div
                    className=""
                    style={{
                      width: '7.5%',
                      height: '4px',
                      background: '#fff',
                    }}
                  ></div>
                </ContactBlock>
              </FadeItem>
              <FadeItem>
                <ContactBlock computedStyle={undefined}>
                  <div className="contact-info">
                    <ul>
                      <li className="insert-phone" />
                      <li className="insert-email" />
                    </ul>
                  </div>
                </ContactBlock>
              </FadeItem>
              <div className="social">
                <Socials data={socials} />
              </div>
            </Col>
          </Row>
        </Grid>
      </ContactStyled>
    </SectionPanel>
  )
}

export default Contact
