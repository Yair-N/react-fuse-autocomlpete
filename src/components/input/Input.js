import {React, useRef, useEffect} from 'react'
import { StyledInput } from './styled_input'

const Input = (props,{onFocus = ()=>{}}) => {

   
    const input_ref = useRef(null)

    let manualFocus = true
  
    const setFocus = () => {
      manualFocus = false
      input_ref?.current && input_ref.current.focus()
      manualFocus = true
    }
  
    const handleOnFocus = (event) => {
      manualFocus && onFocus(event)
    }
  
    
   
    return (

        <StyledInput
            ref = {input_ref}
            {...props}
        />
    )
}

export default Input