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
      <Link to="/">{props.category.v1}</Link>
      {" > "}
      <Link to="/">{props.category.v2}</Link>
      {" > "}
      <Link to="/">{props.category.v3}</Link>
    </div>
    <h3 className="detail-food-name">{props.name}</h3>
    <p className="detail-food-des">{props.des}</p>
    <div className="detail-material-tags">{
      props.materials.map(v => (
        <Tag color="volcano">{v.name + " x " + v.amount}</Tag>
      ))
    }</div>
  </div>
)

export default FoodPanel