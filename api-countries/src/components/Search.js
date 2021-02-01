import React from 'react'

const Search = () => {
    return (
        <section className="search-options">
            <form action="" className="form-control">
                <input type="search" placeholder="Search for a country"/>
            </form>
            <div className="filter-option">
                <select name="option" id="option">
                    <option value="Filter by region">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}

export default Search
