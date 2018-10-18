import React from 'react'
import { Link } from "react-router-dom";
import FoodPanel from './FoodPanel'
import CookingSteps from "./CookingSteps";

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      largeImg: "http://app2.showapi.com/img/caipuImg3/201611110350/1478807434016919_largeImg.jpg",
      cpName: "海米油菜",
      des: "简简单单白白嫩嫩的鲜美炖豆腐！",
      category: {
        v1: "果蔬",
        v2: "菜",
        v3: "油菜",
      },
      materials: [{
        name: "材料1",
        amount: "180克"
      }, {
        name: "材料2",
        amount: "20克"
      }, {
        name: "材料3",
        amount: "30克"
      }],
      steps: [{
        orderNum: 1,
        imgUrl: "http://app2.showapi.com/img/caipuImg3/201611110447/1478810835688417_smallImg.jpg",
        content: "按时发打发按时发打发按时发打发按时发打发按时发打发按时发打发按时发打发按时发打发按时发打"
      }, {
        orderNum: 2,
        imgUrl: "",
        content: "content2"
      }, {
        orderNum: 3,
        imgUrl: "http://app2.showapi.com/img/caipuImg3/201611110447/1478810835688417_smallImg.jpg",
        content: "content3"
      }]
    }
  }
  
  render() {
    return (
      <div className="detail-wrapper">
        <Link to="/" className="goback">返回</Link>
        <FoodPanel 
          img={this.state.largeImg} 
          category={this.state.category}
          name={this.state.cpName}
          des={this.state.des}
          materials={this.state.materials}
        />
        <CookingSteps steps={this.state.steps} />
      </div>
    )
  }
}

export default Details