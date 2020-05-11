import React from 'react';
export default class Home extends React.Component {
  goDash=()=>{
    this.props.history.push({pathname:'/dashboard',datas:{name:'jack'}});
  }
  render() {
    return (
      <div>
        Here is Home!
        <div>
          <button onClick={ this.goDash }>去dashboard</button>
        </div>
      </div>
    )
  }
}