import React from 'react'
import { Fade } from 'react-reveal'
import { useNavigate } from 'react-router-dom'
import { featured_projects } from '../../data/featured_projects'
import Section from '../section/Section'
import './Projects.css'

const Projects = (props) => {
  let navigate = useNavigate()

  return (
    <Section title="Projects">
      <div className="portfolio">
        <div className="container">
          {featured_projects.map((pro) => (
            <div
              className="item"
              onClick={() => {
                navigate('/project/' + pro.id)
              }}
            >
              <img src={pro.logo} alt="" className="proImg" />
              <h3 className="proH3">{pro.name}</h3>
            </div>
          ))}
          <div
            className="othersTab"
            onClick={() => {
              navigate('/othersProject/')
            }}
          >
            others
          </div>
        </div>
      </div>
      <Fade bottom duration={1200} distance="20px">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <p style={{ textAlign: 'center' }}>
            Further in-depth experience pre 2020 can be found on my{' '}
            <a
              href="https://www.linkedin.com/in/mjigalin/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#0be779',
                cursor: 'pointer',
              }}
            >
              LinkedIn
            </a>
            .
          </p> */}
        </div>
      </Fade>
    </Section>
  )
}
export default Projects
