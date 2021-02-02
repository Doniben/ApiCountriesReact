import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const countryData = 'https://restcountries.eu/rest/v2/name/'

const Country = () => {

    const [country, setCountry] = useState ([])
    const {name} = useParams()

    useEffect(() => {
        const fetchCountry = async() => {
            const response = await fetch(`${countryData}${name}`)
            const country = await response.json()
            setCountry(country)
            console.log(country)
        }
        fetchCountry()
    }, [])
    return (
        <>
            <section className="country">
                <div>
                    <Link to="/" className="btn btn-light">
                        <i className="fas fa-arrow-left"> <span className="span"> Back Home</span></i>
                    </Link>
                </div>
                {country.map((c) => {
                        const {
                            numericCode, 
                            flag, 
                            name, 
                            nativeName,
                            population,
                            region,
                            subregion,
                            capital,
                            topLevelDomain,
                            currencies,
                            languages,
                            borders} = c

                return (
                    <article key={numericCode}>
                        <div className="country-elements">
                            <div className="flag">
                                <img src={flag} alt={name}/>
                            </div>
                            <div className="country-descriptions">
                                <div>
                                    <h2>{name}</h2>
                                    <h5>Native Name: <span className="descriptions">{nativeName}</span></h5>
                                    <h5>Population: <span className="descriptions">{population}</span></h5>
                                    <h5>Region: <span className="descriptions">{region}</span></h5>
                                    <h5>Sub Region: <span className="descriptions">{subregion}</span></h5>
                                    <h5>Capital: <span className="descriptions">{capital}</span></h5>
                                </div>
                                <div>
                                    <h5>Top Level Domain: <span className="descriptions">{topLevelDomain}</span></h5>
                                    <h5>Currencies: <span className="descriptions">{currencies[0].name}</span></h5>
                                    <h5>Languages: <span className="descriptions">{languages[0].name}</span></h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="h5-borders">Border Countries: </h5><span className="borders">{borders.map((border) => {
                                return (
                                    <ul key={border}>
                                        <li>{border}</li>
                                    </ul>
                                )
                            })}</span>
                        </div>

                    </article>
                )
            })}
            </section>
        </>
    )
}

export default Country
