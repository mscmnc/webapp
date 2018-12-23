import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navigationArrows = () => (
    <div className="webapp-bottom-imageGrid-navigation" >
        <div className="navigation-back">
            <FontAwesomeIcon icon="arrow-left"/>
        </div>
        <div className="navigation-next">
            <FontAwesomeIcon icon="arrow-right"/>
        </div> 
    </div>
)

export default navigationArrows;