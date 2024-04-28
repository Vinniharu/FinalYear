import React, { useState, useEffect } from "react";

const SelectLevel = (props) => {
  const [value, setValue] = useState('')

  const inputValue = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    props.onChange(value);
  }, [value]);

  return (
    <div>
      <label
        htmlFor={props.title}
        className="flex flex-col gap-4 text-lg font-semibold mb-4"
      >
        {props.name}
        <select
          name={props.title}
          id={props.title}
          className="rounded-md border-2 p-2 text-base"
          onChange={inputValue}
          required
        >
          <option>Select a level</option>
          <option value="100">100 Level</option>
          <option value="200">200 Level</option>
          <option value="300">300 Level</option>
          <option value="400">400 Level</option>
          <option value="500">500 Level</option>
        </select>
      </label>
    </div>
  );
}

export default SelectLevel