import React from 'react';
export default class Dashboard extends React.Component {
  render() {
    console.log('props-->', this.props);
    return (
      <div>
        Here is Dashboard!
        <div>
          你的名字：{this.props.location.datas.name}
        </div>
      </div>
    )
  }
}