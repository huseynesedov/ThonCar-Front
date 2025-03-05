import React from 'react'
import GeneralPrice from '../Additional/components/GeneralPrice'


import "../../Assets/Styles/additionalStyle.css"
import GeneralService from '../../Components/GeneralService'
import SearchCarCard from '../Search/components/SearchCarCard'

function AdditionalOptions() {
    return (

        <section>
            <div className="myContainer">
                <div className="additional-options">
                    <div className="additional-opt-left">
                        <SearchCarCard />
                    </div>
                    <div className="additional-opt-right">
                        <GeneralService/>
                        <GeneralPrice/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AdditionalOptions