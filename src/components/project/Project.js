import React from 'react'
import { useParams } from 'react-router-dom'
import { featured_projects } from '../../data/featured_projects'
import Section from '../section/Section'
import './Project.css'

function Project({ index }) {
  let { projectId } = useParams()

  return (
    <div className="project">
      {featured_projects.map((item, index) => (
        <React.Fragment>
          {item.id == projectId && (
            <>
              <div className="left">
                <div className="title">
                  <Section title={item.name} />
                </div>

                <div className="desc">{item.description}</div>
                <div className="details">
                  <h4 style={{ margin: 0 }}>Roles</h4>
                  <hr
                    style={{
                      color: 'grey',
                      backgroundColor: 'grey',
                      height: 1,
                    }}
                  />

                  <div className="points">
                    {item.task.map((task) => (
                      <li>{task}</li>
                    ))}
                  </div>
                  <h4 style={{ margin: 0 }}>Languages</h4>
                  <hr
                    style={{
                      color: 'grey',
                      backgroundColor: 'grey',
                      height: 1,
                    }}
                  />
                  <div className="languageDiv">
                    <div className="languageContainer">
                      {item.languages.map((lang) => (
                        <li>{lang}</li>
                      ))}
                    </div>
                    <div className="languageContainer">
                      {item.puglins.map((lang) => (
                        <li>{lang}</li>
                      ))}
                    </div>
                    {/* <div className="leftCont">
                    <div className="languageContainer">
                      {item.languages.map((lang) => (
                        <React.Fragment>
                          <img src={lang} />
                        </React.Fragment>
                      ))}
                    </div>
                  </div> */}
                    {/* <div className="rightCont">
                    <div className="languageContainer">
                      {item.puglins.map((lang) => (
                        <React.Fragment>
                          <img src={lang} />
                        </React.Fragment>
                      ))}
                    </div>
                  </div> */}
                  </div>
                </div>
                <div className="buttonContainer">
                  <button type="button" class="btn btn-primary">
                    <a href={item.link}>Explore</a>
                  </button>
                </div>
              </div>
              <div className="right">
                <div className="sliderContainer">
                  <div className="sliderItem">
                    <img src={item.img} alt="" />{' '}
                  </div>
                </div>
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Project
