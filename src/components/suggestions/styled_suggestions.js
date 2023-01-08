import styled from "styled-components";


export const SuggestionsContainer = styled.div`
            position: relative;
            `;

export const SuggestionsDropdown = styled.div`
            position: absolute;
            width: 100%;
            border: 2px solid gainsboro;
            border-radius: 4px;
            margin-top: 2px;
            box-sizing: border-box;
            display: ${({ show }) => (show ? "block" : "none")};
            `;


export const List = styled.ol`
            list-style: none;
            text-align: start;
            font-size: 1.1rem;
            padding: 0;
            margin: 0;
            `;

export const SuggestionItem = styled.li`
            padding: 1.1rem;
            transition: all 250ms ease-in-out;
            &:hover {
                background: #cccccc;
  }
            `;