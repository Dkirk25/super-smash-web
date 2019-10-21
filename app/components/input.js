import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <div className="input-wrapper">
      <input className="input" type="text" ref={ref} placeholder={props.placeholder}></input>
    </div>
  )
})

export default Input;