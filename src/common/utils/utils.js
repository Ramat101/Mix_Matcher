import { csvParse } from 'd3';

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

const MATCHING_OPTIONS = {
    INTERESTED: 'Interested',
    MAYBE: 'Maybe',
    NOT_INTERESTED: 'Not interested at this time',
};

const EVENT_FEEDBACK_FORM_KEYS = {
    NAME: 'Name (Optional)',
}

export const generateMatches = (parsedFile) => {
    // reduce parsedFile to an object enumerating participants and their matches
    // const results = parsedFile.reduce((acc, curr) => {
    //     const name = curr[EVENT_FEEDBACK_FORM_KEYS.NAME];
    //     acc[name] = {
    //         name,
    //         [MATCHING_OPTIONS.INTERESTED]: [],
    //         [MATCHING_OPTIONS.MAYBE]: [],
    //     };
    //     return acc;
    // }, {});
    
    const results = parsedFile.map(participant => ({ name: participant[EVENT_FEEDBACK_FORM_KEYS.NAME], [MATCHING_OPTIONS.INTERESTED]: [], [MATCHING_OPTIONS.MAYBE]: [] }));

    for(let r = 0; r < results.length; r++) {
        for(let c = 0; c < parsedFile.length; c++) {
            if (r === c) {
                continue;
            }
            const curr = results[r].name;
            const matchStatus = parsedFile[c][curr];

            results[r][matchStatus]?.push(parsedFile[c][EVENT_FEEDBACK_FORM_KEYS.NAME]);
        }
    }
    console.log('results', results);
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

export const isLoading = (navigation) => ((navigation.state === 'loading') || (navigation.state === 'submitting'));

