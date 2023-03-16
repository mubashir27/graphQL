import React from "react";

const Input = (props) => {
  const { setData, data, placeholder } = props;
  return (
    <div className="p-2" >
      <input
        placeholder={placeholder}
        className="  bg-gray-50 border border-gray-300 
      text-gray-900 text-sm rounded-lg focus:ring-blue-500 
       block w-full p-2.5 "
        value={data}
        onChange={(event) => setData(event.target.value)}
      />
    </div>
  );
};

export default Input;
