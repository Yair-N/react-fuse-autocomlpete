import React, { useRef, useState } from 'react'

import Suggestions from '../suggestions/Suggestions';
import Input from '../input/Input';


import { useFuse } from '../useFuse';
import { AutocompleteContainer } from './styled_autocomplete';


const Autocomplete = ({
    items,
    onFocus = () => { },
    format_result = () => { },
    options,
    suggestion_format,
}) => {

    const [searchTerm, setText] = useState("");



    // fuse and display results
    const fuse_options = { ...default_fuse_options, ...options }
    const suggestions = useFuse(searchTerm, items, options = fuse_options);


    // how each suggestion in suggestions will be displayed as sumtimes we cannot odisplay the hole object
    const format_suggestion = { format_result } ? { format_result } : (suggestion, keys_to_display, seporator) => {

        const keys = keys_to_display ? keys_to_display : [Object.keys(suggestion)[0]];
        console.log(keys)
        let suggestion_string
        if (keys.length > 1) {
            suggestion_string = keys.map((key, index) => {
                return suggestion[key] + (index + 1 < keys.length ? (seporator ? seporator : ', ') : '')
            })
        } else {
            suggestion_string = suggestion[keys[0]]
        }
        return suggestion_string
    }

    // focus handleing


    const handleOnFocus = (event) => {

    }

    const handleSearchTermChange = (event) => {
        setText(event.target.value)
    }
    return (
        <AutocompleteContainer>
            <Input
                spellCheck='false'
                type="search"
                value={searchTerm}
                onChange={(event) => handleSearchTermChange(event)}
                placeholder="search a country by name, iso code or capital"
                onFocus={(e) => handleOnFocus(e)}
            />

            <Suggestions
                items={items}
                suggestion_format={suggestion_format}
                options = {options}
                searchTerm = {searchTerm}
            />

        </AutocompleteContainer>
    );
};

export default Autocomplete

const default_fuse_options = {
    // includeScore: true,
    threshold: .2,
    minMatchCharLength: 2,
    includeMatches: true,
}

