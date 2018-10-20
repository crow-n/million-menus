import React from 'react'
import { Skeleton, Card, Avatar } from 'antd';

const { Meta } = Card;

class MenuCard extends React.PureComponent {
  state = {
    loading: false,
  }

  render() {
    const { loading } = this.state;

    return (
      <Card className="menu-card">
        <Skeleton
          loading={loading}
          avatar={{ shape: "square" }}
          title={false}
          active>
          <Meta
            avatar={
              <Avatar className="card-img" shape="square" src={this.props.img} />}
            title={this.props.title}
            description={this.props.description}
          />
        </Skeleton>
      </Card>
    );
  }
}

export default MenuCard