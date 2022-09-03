import React, { useState } from 'react'
import { Search } from '@atlaskit/atlassian-navigation'

export default function SearchBar() {
    const [value, setValue] = useState('')

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    return (
        <Search
            onClick={onChange}
            placeholder="Search..."
            tooltip="Search"
            label="Search"
            value={value}
        />
    )
}
