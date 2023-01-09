import { React, useRef, useEffect } from 'react'
import { SuggestionsContainer, SuggestionsDropdown, List, SuggestionItem } from './styled_suggestions'




const Suggestions = (
    {

        searchTerm = '',
        onFocus = () => { },
        options,
        items,
        suggestionFormat,
        handle_selection,
        suggestions,
        activaItem,
        setSuggestionString,
        setSelectedObject,

    }

) => {

    const ref = useRef(null)

    useEffect(() => {
        const updateSelection = (suggestions) => {
            if (suggestions?.length > 0 && activaItem > -1) {
                setSelectedObject(suggestions[activaItem])
                let element = suggestionFormat(suggestions[activaItem])
                let string = element['props']['children']['props']['children'].join("").toString()
                setSuggestionString(string)
            }
        }

        return updateSelection(suggestions)

    }, [activaItem])




    return (
        <SuggestionsContainer >
            <SuggestionsDropdown
                show={searchTerm.length > 0 && suggestions.length > 0}
            >
                <List ref={ref}
                >

                    {suggestions.map((item, index) => (
                        <SuggestionItem
                            index={index}
                            active={activaItem}
                            key={index}>{suggestionFormat(item)}</SuggestionItem>
                    ))}
                </List>
            </SuggestionsDropdown>
        </SuggestionsContainer>
    )
}

export default Suggestions