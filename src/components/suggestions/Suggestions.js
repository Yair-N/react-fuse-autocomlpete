import {React, useRef} from 'react'
import { SuggestionsContainer, SuggestionsDropdown, List, SuggestionItem } from './styled_suggestions'
import { useFuse } from '../useFuse';




const Suggestions = (
    {
        searchTerm = '',
        onFocus = () => { },
        options,
        items, 
        suggestion_format,
        handle_selection,
    }

) => {

      const suggestions = useFuse(searchTerm, items, options);

    return (
        <SuggestionsContainer >
            <SuggestionsDropdown
                // onFocus={(event) => handleOnFocus(event)}
                show={true} //{searchTerm.length > 0 && items.length > 0}
            >
                <List>
                    
                    {suggestions.map((item) => (
                        <SuggestionItem key={item.index}>{suggestion_format(item)}</SuggestionItem>
                    ))}
                </List>
            </SuggestionsDropdown>
        </SuggestionsContainer>
    )
}

export default Suggestions