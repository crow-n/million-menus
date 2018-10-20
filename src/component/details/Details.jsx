import React from 'react'
import { Link } from "react-router-dom";
import FoodPanel from './FoodPanel'
import CookingSteps from "./CookingSteps";

const Details = props => {
  // 获取从Link传过来的数据
  const detail = props.location.state
  const { type_v1, type_v2, type_v3 } = detail
  const category = { type_v1, type_v2, type_v3 }

  return (
    <div className="detail-wrapper">
      <Link to="/" className="goback">返回</Link>
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