import React, { useState, useEffect } from "react";

const StringInput = (props) => {
   const [value, setValue] = useState('')

   const inputChange = (e) => {
      setValue(e.target.value);
   }

   useEffect(() => {
     props.onChange(value.toUpperCase());
   }, [value]);

  return (
    <label
      htmlFor={props.title}
      className="flex flex-col gap-4 text-lg font-semibold mb-4"
    >
      {props.name}
      <div className="rounded-md border-2 p-2 text-base">
        <input
          type="text"
          placeholder={props.name}
          className="w-full outline-none appearance-none"
          value={value}
          onChange={inputChange}
          required
        />
      </div>
    </label>
  );
}

export default StringInput