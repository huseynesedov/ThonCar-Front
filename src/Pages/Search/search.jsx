import React from 'react'
import SearchCarCard from './Components/SearchCarCard'

import "../../Assets/Styles/searchStyle.css"

function Search() {
    return (
        <section>
            <div className='myContainer'>
                <div className="search-cards-list">
                    <SearchCarCard />
                    <SearchCarCard />
                    <SearchCarCard />
                    <SearchCarCard />

                </div>

            </div>
        </section>
    )
}

export default Search