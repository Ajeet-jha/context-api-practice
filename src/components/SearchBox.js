import React from 'react'

function SearchBox({ onChange }) {
    return (
        <>
            <input
                placeholder="Write to search"
                onChange={onChange}
            />
        </>
    )
}

export default SearchBox
