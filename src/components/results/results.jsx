import { useEffect, useState } from 'react';

import Accordion from 'components/accordion';
import './results.scss';

function Results() {
    const [shouldFadeIn, setShouldFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => { setShouldFadeIn(true) }, 10);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fade-in ${shouldFadeIn ? 'fade-in-complete' : null} resultsContainer`}>
            <Accordion />
        </div>
    );
}

export default Results;