import { React, useRef, useEffect } from 'react'
import { StyledInput } from './styled_input'
import { ReactComponent as CancelIcon } from "../../assets/svg/cancel-cross-svgrepo-com.svg";

const Input = (
    { onKeyDown,onCancel, placeholder, searchTerm, setSearchTerm, onChange },
) => {

    const handleClear = () => {

        setSearchTerm('')
    }

    return (

        <StyledInput >
            <input
                spellCheck={false}
                placeholder={placeholder}
                type={'text'}
                value={searchTerm}
                onChange={onChange}
                onKeyDown = {onKeyDown}
            />

            <CancelIcon
                style={searchTerm?.length > 0 ? { display: 'block' } : { display: 'none' }}
                type='button'
                width={20}
                height={20}
                focusable="false"
                onClick={handleClear}
            />


        </StyledInput>
    )
}

export default Input