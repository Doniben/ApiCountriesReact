import React from 'react'

const Search = () => {
    window.addEventListener('DOMContentLoaded', () => {
        const search = document.getElementById('search')
    
        search.addEventListener('click', (e) => {
          const { value } = e.target
    
          const countryName = document.querySelectorAll('.country-name')
    
          countryName.forEach((name) => {
            if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
              name.parentElement.parentElement.style.display = 'block'
            } else {
              name.parentElement.parentElement.style.display = 'none'
            }
          })
        })
      })
    return (
        <section className="search-options">
            <form action="" className="form-control">
                <input type="search" id="search" placeholder="Search for a country"/>
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
