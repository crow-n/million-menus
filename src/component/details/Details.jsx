import React from 'react'
import FoodPanel from './FoodPanel'
import CookingSteps from "./CookingSteps";

const Details = props => {
  // 获取从Link传过来的数据
  const detail = props.location.state
  if(!detail) return <div></div>
  
  const { type_v1, type_v2, type_v3 } = detail
  const category = { type_v1, type_v2, type_v3 }

  return (
    <div className="detail-wrapper">
      <FoodPanel
        img={detail.largeImg}
        category={category}
        name={detail.cpName}
        des={detail.des}
        materials={detail.yl}
      />
      <CookingSteps steps={detail.steps} />
    </div>
  )
}


export default Details