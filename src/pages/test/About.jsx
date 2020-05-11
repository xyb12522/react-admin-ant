import React from 'react';
export default class About extends React.Component {
  render() {
    console.log('---about-');
    return (
      <div>
        Here is About!
        <div>
          传过来的值：{this.props.match.params.id}
          <br/>
          中文：{this.props.match.params.text}
        </div>
      </div>
    )
  }
}