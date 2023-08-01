import { useEffect, useState, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import { CMSContext } from 'common/CMS';
import ResultsAccordion from 'components/resultsAccordion';
import SearchBox from 'components/searchBox';
import './results.scss';

function Results() {
    const [shouldFadeIn, setShouldFadeIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const { results: matches } = useLoaderData();
    const { main: { results: cms } } = useContext(CMSContext);

    useEffect(() => {
        const timer = setTimeout(() => { setShouldFadeIn(true) }, 10);
        return () => clearTimeout(timer);
    }, []);

    const filteredMatches = matches.filter((element) =>
        element.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='resultsContainer'>
            <div className="searchBoxContainer">
                <SearchBox onChange={setSearchTerm} value={searchTerm} cms={cms.searchInput} />
            </div>
            <div className={`fade-in ${shouldFadeIn ? 'fade-in-complete' : null} resultsBox`}>
                <p className='heading3 title'>{ cms.title }</p>
                <ResultsAccordion matches={filteredMatches} />
            </div>
        </div>
    );
}

export default Results;