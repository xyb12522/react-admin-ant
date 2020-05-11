import React from 'react';
export default class Mobile extends React.Component {
  goDash=()=>{
    this.props.history.push({pathname:'/dashboard',datas:{name:'jack'}});
  }
  render() {
    return (
      <div>
        进入手机端
        {/* <div>
          <button onClick={ this.goDash }>去dashboard</button>
        </div> */}
      </div>
    )
  }
}