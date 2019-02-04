import * as React from "react";
export default class extends React.Component{
  state = {
    showUsers: true,
  }
  toogleUsers = () => {
    const newShowUsers = !this.state.showUsers;
    this.setState({
      showUsers:newShowUsers,
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.toogleUsers}>{this.state.showUsers ? "Hide" : "Show"}</button>{
          this.state.showUsers &&(
            <div>
              <h2>Users</h2>
              <ol>
                <li>Abrar hussain</li>
                <li>hadi</li>
                <li>masood</li>
                <li>nosheen</li>
                <li>Alia</li>
                <li>zubair</li>
                <li>Waqar</li>
                <li>shaheen</li>
                <li>Shazia</li>
                <li>Mueen</li>
              </ol>
            </div>
          )
        }
      </div>
    )
  }

}