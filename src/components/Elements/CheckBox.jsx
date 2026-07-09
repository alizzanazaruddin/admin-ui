import React from 'react'

function CheckBox({id, label}) {
  return (
    <>
      <input
        type="checkbox"
        className="text-sm accent-primary"
        name="status"
        id="status"
      />
      <label 
        htmlFor={id} 
        className="text-sm text-gray-01 ml-6"
      >
        {label}
      </label>
    </>
  )
}

export default CheckBox