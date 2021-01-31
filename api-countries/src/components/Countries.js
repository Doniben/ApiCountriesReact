import React, { useState, useEffect } from 'react'
/* import { Link } from 'react-router-dom' */

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
        <section>
            {countries.map((country) => {
                const {
                    numericCode, 
                    name, 
                    population, 
                    region, 
                    capital, 
                    flag} = country
    
                return (
                <article key={numericCode}>
                    <div>
                        <img src={flag} alt={name}/>
                        <h4>{name}</h4>
                        <h5>Population: <span>{population}</span></h5>
                        <h5>Region: <span>{region}</span></h5>
                        <h5>Capital: <span>{capital}</span></h5>
                    </div>
                </article>
                )
            })}
        </section>
    )
}

export default Countries