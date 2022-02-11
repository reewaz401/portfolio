import { default as React } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { simple_project } from '../../data/otherProject'
import Section from '../section/Section'
import './OthersProject.css'
function OthersProject() {
  return (
    <div className="otherproject">
      <div className="title">
        <Section title="Other Projects" />
      </div>
      <div className="projectDetail">
        <Accordion>
          {simple_project.map((item, index) => (
            <AccordionItem className="detailItem">
              <AccordionItemHeading className="top">
                <AccordionItemButton>{item.name}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="bottom">
                <p>{item.desc}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
  // <div className="otherproject">
  //   <div className="title">
  //     <Section title="Other Projects" />
  //   </div>
  //   <div className="projectDetail">
  //     {simple_project.map((item, index) => (
  //       <React.Fragment>
  //         <div className="detailItem">
  //           <div className="top">{item.name}</div>
  //           <div className="bottom">{item.index}</div>
  //         </div>
  //       </React.Fragment>
  //     ))}
  //   </div>
  // </div>
}

export default OthersProject
