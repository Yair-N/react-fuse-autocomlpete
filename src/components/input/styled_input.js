import styled from "styled-components";


export const StyledInput = styled.div`

            display: flex;
            align-items: center;
            width: 100%;
            border: 2px solid gainsboro;
            border-radius: 4px;
            font-size: 1.2rem;
            z-index: 10;
            background: transparent;
            > input {
                width: 100%;
            
                padding: 0 0 0 13px;
            
                border: none;
                outline: none;
            
                background-color: rgba(0, 0, 0, 0);
                font-size: inherit;
                font-family: inherit;
            
                color: ${(props) => props.color};
            
                ::placeholder {
                  color: ${(props) => props.placeholderColor};
                  opacity: 1;
            
                  :-ms-input-placeholder {
                    color: ${(props) => props.placeholderColor};
                  }
            
                  ::-ms-input-placeholder {
                    color: ${(props) => props.placeholderColor};
                  }
            &:focus {
                outline: none;
            border-color: lightblue;
            box-shadow: 0 0 4px lightblue;
  }
            `;