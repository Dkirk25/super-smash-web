import React, { forwardRef } from 'react';


const Input = forwardRef((props, ref) => {
  const keyPress = (event) => {
    if(event.key === 'Enter') props.enter();
  }
  return (
    <div className="input-wrapper">
      <input className="input" type="text" ref={ref} placeholder={props.placeholder} autoCapitalize="none" autocompletetype={`props.autoType`} onKeyDown={keyPress}></input>
    </div>
  )
})

export default Input;