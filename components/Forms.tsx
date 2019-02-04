import * as React from "react";
import Es from "./emptySpaces";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";

export default class extends React.Component {
  state = {
    FirstName: "",
    LastName: "",
    Email: "",
    FatherName: "",
    Address: "",
    Gender: "",
    Interest: [""],
    University: "",
    Agreement:"",
  };

  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChangeForm = e => {
    if (e.target) {
      let { value, name, type, checked } = e.target;
      if (["Interest"].includes(name)) {
        const arr = [...this.state[name]];
        if (checked) {
          arr.push(value);
        } else {
          const index = arr.indexOf(value);
          if (index > -1) {
            arr.splice(index, 1);
          }
        }
        this.setState({
          [name]: arr
        });
        return true;
      }
      if (type === "checkbox") {
        value = checked;
      }
      this.setState({
        [name]: value
      });
    }
  };

  printInfo() {
    return (
      <div className="print">
        <h3>Registration Form</h3>
        <p> <span className="span">First Name:</span> <Es/>{this.state.FirstName}</p>
        <p><span className="span">Last Name:</span><Es/>{this.state.LastName}</p>
        <p><span className="span">Email:</span><Es/>{this.state.Email}</p>
        <p><span className="span">Father Name:</span><Es/>{this.state.FatherName}</p>
        <p><span className="span">Address:</span><Es/>{this.state.Address}</p>
        <p><span className="span">Gender:</span><Es/>{this.state.Gender}</p>
        <p><span className="span">Interest:</span><Es/>{this.state.Interest.join(" ")}</p>
        <p><span className="span">University:</span><Es/>{this.state.University}</p>
        <p><span className="span">Agreement accepted:</span> <Es/>{this.state.Agreement ? "Yes" : "No"}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="form">
        {
          <form onSubmit={this.submitForm} onChange={this.onChangeForm}>
            <h3 className="form-val">Form Validation</h3>
            <label htmlFor="">First Name:</label>
            <br />
            <input
              type="text"
              name="FirstName"
              defaultValue={this.state.FirstName}
              className="xyz"
            />{" "}
            <br />
            <br />
            <label htmlFor="">Last Name:</label>
            <br />
            <input
              type="text"
              name="LastName"
              defaultValue={this.state.LastName}
              className="xyz"
            />{" "}
            <br />
            <br />
            <label htmlFor="">Email:</label>
            <br />
            <input
              type="text"
              name="Email"
              defaultValue={this.state.Email}
              className="xyz"
            />{" "}
            <br />
            <br />
            <label htmlFor="">Father Name:</label>
            <br />
            <input
              type="text"
              name="FatherName"
              defaultValue={this.state.FatherName}
              className="xyz"
            />{" "}
            <br />
            <br />
            <label htmlFor="">Address:</label>
            <br />
            <textarea
              className="xyz1"
              name="Address"
              defaultValue={this.state.Address}
            />{" "}
            <br />
            <br />
            <label htmlFor="">Gender:</label>
            <br />
            <RadioGroup
              values={[
                { value: "Female", label: "Female" },
                { value: "Male", label: "Male" }
              ]}
              selected={this.state.Gender}
              name="Gender"
            /> <br/>
            <CheckboxGroup
              values={["cricket", "football", "reading", "hiking", "riding"]}
              label="Interest:"
              name="Interest"
              selected={this.state.Interest}
            /> <br/>
            <label htmlFor="">University:</label>
            <select name="University" defaultValue={this.state.University}>
              <option>Select Your University</option>
              <option value="Karakoram International University">KIU</option>
              <option value="Aga Khan University">AKU</option>
              <option value="Ghulam Ishaq Khan University">GIK</option>
            </select>
            <label><br/> <br/>
                <input type="checkbox" value="1" name="Agreement" />
                Accept the Agreement
              </label><br/><br/>
            <button className="submit-form">Submit</button>
          </form>
        }
        <div>{this.printInfo()}</div>
      </div>
    );
  }
}
