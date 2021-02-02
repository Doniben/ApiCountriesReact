import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const api = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchCountries = async() => {
            const response = await fetch(api)
            const countries = await response.json()
            setCountries(countries)
            /* console.log(countries) */
        }
        fetchCountries()
    }, [])

    return (
        <section className="d-grid">
            {countries.map((countries) => {
                const {
                    numericCode, 
                    name, 
                    population, 
                    region, 
                    capital, 
                    flag} = countries
    
                return (
                <article key={numericCode}>
                    <div>
                        <Link to={`/countries/${name}`}>
                            <img src={flag} alt={name}/>
                        </Link>
                        <div className="home-details">
                            <h3 className="country-name">{name}</h3>
                            <h5>Population: <span>{population}</span></h5>
                            <h5>Region: <span>{region}</span></h5>
                            <h5>Capital: <span>{capital}</span></h5>
                        </div>
                    </div>
                </article>
                )
            })}
        </section>
    )
}

export default Countries