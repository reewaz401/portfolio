

import React from 'react'
import Section from '../section/Section'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
             <Section title="Portfolio"/>
            <div className="container">
                <div className="item">
                <img src="assets/in.jpeg"alt="" className='port'/>
<h3 className="portH3">Banking app</h3>
                </div>
                <div className="item">
                <img src="assets/in.jpeg"alt="" className='port'/>
<h3 className="portH3">Banking app</h3>
                </div>
                <div className="item">
                <img src="assets/in.jpeg"alt="" className='port'/>
<h3 className="portH3">Banking app</h3>
                </div>
                <div className="item">
                <img src="assets/in.jpeg"alt="" className='port'/>
<h3 className="portH3">Banking app</h3>
                </div>
                <div className="item">
                <img src="assets/in.jpeg"alt="" className='port'/>
<h3 className="portH3">Banking app</h3>
                </div>
              
            </div>
        </div>
  )
}

export default Portfolio
