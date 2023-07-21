import { useNavigation, useLocation } from 'react-router-dom';

import { isLoading } from "common/utils";

import './subheader.scss';

export function Subheader({ cms }) {
    const navigation = useNavigation();
    const location = useLocation();

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