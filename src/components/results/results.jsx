import { useEffect, useState } from 'react';

import './results.scss';

function Results() {
    const [shouldFadeIn, setShouldFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => { setShouldFadeIn(true) }, 10);
        return () => clearTimeout(timer);
    }, [])
    return (<p className={`fade-in ${shouldFadeIn ? 'fade-in-complete' : null}`}>Here are your matches!</p>);
}

export default Results;