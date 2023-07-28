import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import ResultsAccordion from 'components/resultsAccordion';
import SearchBox from 'components/searchBox';
import './results.scss';

function Results() {
    const [shouldFadeIn, setShouldFadeIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const { results: matches } = useLoaderData();

    useEffect(() => {
        const timer = setTimeout(() => { setShouldFadeIn(true) }, 10);
        return () => clearTimeout(timer);
    }, []);

    const filteredMatches = matches.filter((element) =>
        element.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='resultsContainer'>
            <div className='searchBox'>
                <SearchBox onChange={setSearchTerm} value={searchTerm} />
            </div>         
            <div className={`fade-in ${shouldFadeIn ? 'fade-in-complete' : null} resultsBox`}>
                <caption className='heading3'>Matches</caption>
                <ResultsAccordion matches={filteredMatches} />
            </div>
        </div>
    );
}

export default Results;