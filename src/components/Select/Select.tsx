import React from "react";
import "./Select.css";

interface SelectProps{
  data: string[]| null,
  typeHandler: (val: string) => void,
  defaultLabel: string
}

const Select: React.FC<SelectProps> = ({data, typeHandler, defaultLabel}) => {
  return (
    <select
      onChange={(event) => typeHandler(event.target.value)}
      defaultValue={defaultLabel}
    >
      <option value={defaultLabel}>{defaultLabel}</option>
      {data &&
        data.map((element, index) => (
          <option value={element} key={index}>
            {element}
          </option>
        ))}
    </select>
  )
}

export default Select;