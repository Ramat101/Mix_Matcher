import { csvParse } from 'd3';
import { values, isEmpty } from 'ramda';

import { ACTIONS } from 'store';
import { MOCK_RESULTS } from 'common/mocks';

export const PARSE_FILE_EXCEPTIONS = {
    MISSING_FILE_EXCEPTION: {cause: 0, message: 'File not supplied'},
    FILE_TYPE_EXCEPTION: { cause: 1, message: 'Expected a Blob' },
    READ_EXCEPTION: { cause: 2, message: 'Couldn\'t read the file'},
    PARSE_EXCEPTION: { cause: 3, message: 'Couln\'t parse the file'},
};

export const parseFile = async (file) => {
    if (!file) {
        throw new Error(...PARSE_FILE_EXCEPTIONS.MISSING_FILE_EXCEPTION);
    } else if (!(file instanceof Blob)) {
        throw new TypeError(...PARSE_FILE_EXCEPTIONS.FILE_TYPE_EXCEPTION)
    } else {
        // convert file to text
        try {
            const fileAsText = await file.text();
            
            // parse the file
            try {
                return await csvParse(fileAsText);
            } catch {
                throw new Error(...PARSE_FILE_EXCEPTIONS.PARSE_EXCEPTION);
            }
        
        } catch {
            throw new Error(...PARSE_FILE_EXCEPTIONS.READ_EXCEPTION);
        }
    }
}

const INTERESTED_SET = new Set(['Interested', 'Interested. I would like to get a phone number.', 'Interested. Please set up via shadchan.']);
const MAYBE_SET = new Set(['Maybe', 'Maybe?']);

export const MATCHING_OPTIONS = {
    INTERESTED: 'Interested',
    MAYBE: 'Maybe',
};

const EVENT_FEEDBACK_FORM_KEYS = {
    NAME: 'Name (Optional) ',
    EMAIL: 'Email',
}

export const generateMatches = (parsedFile) => {
    // reduce parsedFile into an object enumerating participants and their matches
    const matches = parsedFile.reduce((acc, curr) => {
        const name = curr[EVENT_FEEDBACK_FORM_KEYS.NAME];
        if(name) {
            acc[name] = {
                name,
                email: curr[EVENT_FEEDBACK_FORM_KEYS.EMAIL] || 'example@gmail.com',
                [MATCHING_OPTIONS.INTERESTED]: new Set(),
                [MATCHING_OPTIONS.MAYBE]: new Set(),
            };
        }
        return acc;
    }, {});

    // identify who was interested in participant
    const names = Object.keys(matches);
    for(let  name of names) {
        for(let c = 0; c < parsedFile.length; c++) {
            if (name === parsedFile[c][EVENT_FEEDBACK_FORM_KEYS.NAME]) {
                continue;
            }
            const matchStatus = parsedFile[c][name];
            
            if (INTERESTED_SET.has(matchStatus)) {
                matches[name][MATCHING_OPTIONS.INTERESTED].add(parsedFile[c][EVENT_FEEDBACK_FORM_KEYS.NAME]);
            } else if (MAYBE_SET.has(matchStatus)) {
                matches[name][MATCHING_OPTIONS.MAYBE].add(parsedFile[c][EVENT_FEEDBACK_FORM_KEYS.NAME]);
            }
        }
    }
    
    // determine if particpant was mutually interested, otherwise suggest as a maybe
    for(let name of names) {
        for (let interest of matches[name][MATCHING_OPTIONS.INTERESTED]) {
            if (!matches[interest][MATCHING_OPTIONS.INTERESTED].has(name)) {
                matches[name][MATCHING_OPTIONS.INTERESTED].delete(interest);
                matches[name][MATCHING_OPTIONS.MAYBE].add(interest);
            }
        }
    }

    return matches;
};

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

export const fakeNetwork = async (key, delay) => {
    if (!key) {
        fakeCache = {};
    }

    if (fakeCache[key]) {
        return;
    }

    fakeCache[key] = true;
    return new Promise(res => {
        setTimeout(res, (delay || Math.random() * 800));
    });
}

export const resultsLoader = async () => {
    const matchObj = await ACTIONS.GET_MATCHES();
    const matches = values(matchObj);

    // temporary for testing
    const results = isEmpty(matches) ? MOCK_RESULTS : matches;

    return { results };
}

const getEmailBody = (name, matches, maybes, cms) => {
    let body;

    body = `${cms.introduction}${name}`;
    if (isEmpty(matches) && isEmpty(maybes)) {
        body += cms.noMatches;
    } else {
        body += `${cms.generic}${cms.matches}[${matches.join(', ')}]${cms.maybes}[${maybes.join(', ')}].`;
    }

    return encodeURIComponent(body);
}

export const getEmailLink = (name, email, cms, matches, maybe) => {
    const body = getEmailBody(name, matches, maybe, cms.body);
    return `mailto:${email}?subject=${cms.subject}&body=${body}`;
};

export const isLoading = (navigation) => ((navigation.state === 'loading') || (navigation.state === 'submitting'));
