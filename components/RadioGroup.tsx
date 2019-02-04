import * as React from "react";

export default ({ values, selected, name }) => {
  return values.map(item => {
    return (
      <div>
        <label>{item.label}</label>
        <input
          defaultChecked={selected == item.value}
          type="radio"
          name={name}
          value={item.value}
          />
      </div>
    );
  });
};
