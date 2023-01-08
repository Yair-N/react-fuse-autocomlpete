import styled from "styled-components";


export const StyledInput = styled.input`
            width: 100%;
            padding: 1.1rem;
            border: 2px solid gainsboro;
            border-radius: 4px;
            font-size: 1.2rem;
            z-index: 10;
            background: transparent;

            &:focus {
                outline: none;
            border-color: lightblue;
            box-shadow: 0 0 4px lightblue;
  }
            `;