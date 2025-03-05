import React from 'react';

import GeneralPrice from '../Additional/components/GeneralPrice.jsx';
import SearchCarCard from '../../Pages/Search/Components/searchCarCard.jsx';
import GeneralService from '../../Components/GeneralService.jsx';

import '../../Assets/Styles/additionalStyle.css';


function AdditionalOptions() {
    return (
        <section>
            <div className="myContainer">
                <div className="additional-options">
                    <div className="additional-opt-left">
                        <SearchCarCard />
                    </div>
                    <div className="additional-opt-right">
                        <GeneralService />
                        <GeneralPrice />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdditionalOptions;
