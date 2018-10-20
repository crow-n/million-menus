import React from 'react'
import { Link } from 'react-router-dom'
import { Tag } from 'antd'

const FoodPanel = props => (
  <div className="detail-show-box">
    <div
      className="detail-food-img"
      style={{ backgroundImage: `url('${props.img}')` }}
    >
    </div>
    <div className="detail-category-line">
      <Link to="/">{props.category.type_v1}</Link>
      {" > "}
      <Link to="/">{props.category.type_v2}</Link>
      {" > "}
      <Link to="/">{props.category.type_v3}</Link>
    </div>
    <h3 className="detail-food-name">{props.name}</h3>
    <p className="detail-food-des">{props.des}</p>
    <div>{
      props.materials.map((v, i) => (
        <Tag key={i} color="volcano">
          { v.ylName }
          { v.ylUnit ? " x " : "" }
          { v.ylUnit }
        </Tag>
      ))
    }</div>
  </div>
)

export default FoodPanel