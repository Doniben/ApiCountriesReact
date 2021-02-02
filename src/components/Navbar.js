import React from 'react'

const Navbar = () => {
    const changeLight = () => {
        const moon = document.querySelector('.fa-moon')
        const nav = document.querySelector('.nav')
        const input = document.querySelector('#search')
        const select = document.querySelector('select')
        const cards = document.querySelectorAll('.home-details')
        const borders = document.querySelectorAll('ul')
        const bgMoon = document.querySelector('.btn-moon')
        
        moon.addEventListener('click', () => {
        document.body.classList.toggle('light-view')
        nav.classList.toggle('light-view')
        input.classList.toggle('light-view')
        select.classList.toggle('light-view')
        bgMoon.classList.toggle('light-view')
        cards.forEach((card) => {
            card.classList.toggle('light-view')
        })
        borders.forEach((border) => {
            border.classList.toggle('light-view')
        })
        })
    }
    return (
        <nav className="nav">
            <div>
                <h1>Where in the World?</h1>
            </div>
            <button className="btn-moon">
                <i className="fas fa-moon" onClick={() => changeLight()}><span className="span"> Dark Mode</span></i>
            </button>
        </nav>
    )
}

export default Navbar
