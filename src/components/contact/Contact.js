import React from 'react'
import { Bounce } from 'react-reveal'
import facebook from '../../images/social/facebook.png'
import github from '../../images/social/github.png'
import linkedin from '../../images/social/linkedin.png'
import ContactForm from '../contactForm/ContactForm'
import Section from '../section/Section'
import './Contact.css'

const Contact = () => {
  function endEmail(e) {}
  return (
    <Section title="Contact">
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/reewaz401"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/reewaz-maskey-87b980195/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href="https://www.facebook.com/devastate.rocks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
