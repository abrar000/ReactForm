import * as React from 'react';

export default class extends React.Component{
  state = {
    x: 0,
    y: 0,
  }
  mouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    this.setState({
      x, y
    })
  }
  render(){
    return(
      <div onMouseMove={this.mouseMove} style={{background: "blue", position: 'relative', width: "200px", height: "200px"}}>
      <p>X: {this.state.x}</p>
      <p>Y: {this.state.y}</p>
      <div style={{width: '40px', height: '40px',  background: 'red',position: 'absolute', left: this.state.x, top: this.state.y}}>
      here
      </div>
   </div>
    )
  }
}
