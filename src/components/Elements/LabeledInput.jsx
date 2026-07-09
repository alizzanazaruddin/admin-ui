import React from 'react'

function LabeledInput(props) {
  const { label, type, placeholder, name, id } = props;

  return (
    <>
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>
      <input
        type={type}
        className="py-3 pl-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
        placeholder={placeholder}
        name={name}
        id={id}
      />
    </>
  )
}

export default LabeledInput