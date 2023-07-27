import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Accordion from 'components/accordion';
import './results.scss';

function Results() {
    const [shouldFadeIn, setShouldFadeIn] = useState(false);
    const { results } = useLoaderData();

    useEffect(() => {
        const timer = setTimeout(() => { setShouldFadeIn(true) }, 10);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fade-in ${shouldFadeIn ? 'fade-in-complete' : null} resultsContainer`}>
            <Accordion matchElements={results} />
        </div>
    );
}

export default Results;