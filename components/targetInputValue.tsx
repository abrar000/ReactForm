import * as React from 'react';

export default class extends React.Component{
  state = {

    text:""
  }
 
  inputChange = (e) => {
    const value = e.target.value;
    this.setState({
      text:value
    })
  }

  render(){
    return(
      <div>
       <input type='text' onKeyUp={this.inputChange} /> <br />
                { this.state.text}<br />
                 <br />
      </div>

    )
  }
}