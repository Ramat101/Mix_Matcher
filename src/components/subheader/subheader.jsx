import { useNavigation, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import { CMSContext } from 'common/CMS';
import { isLoading } from "common/utils";

import './subheader.scss';

export function Subheader() {
    const navigation = useNavigation();
    const location = useLocation();
    const { main: { subheading: cms }} = useContext(CMSContext);

    const getHeadingContent = () => {
        let key = 'index';
        if (isLoading(navigation)) {
            key = 'loading';
        } else if (location.pathname === '/results') {
            key = 'results';
        }
        return cms[key];
    }
    
    return (
        <header>
            <h2 className={`${isLoading(navigation) ? 'submitting': null} header2`}>{ getHeadingContent() }</h2>
        </header>
    );
}

export default Subheader;