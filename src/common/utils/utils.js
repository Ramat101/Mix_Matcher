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

