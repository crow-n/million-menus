import React from 'react'
import { Timeline } from 'antd'

const { Item } = Timeline

const CookingSteps = props => (
  <div className="steps-box">
    <Timeline>{
      props.steps.map(v => (
        <Item 
          key={v.orderNum}
          className="step-item" 
          dot={<div className="step-icon">{v.orderNum}</div>}
        >
          {
            <div className="step-cnt">
              {v.imgUrl !== "" && 
              <img className="step-img" src={v.imgUrl} alt=""/>}
              <p>{v.content}</p>
            </div>
          }
        </Item>
      ))
    }</Timeline>,
  </div>
)

export default CookingSteps