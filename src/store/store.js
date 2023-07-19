import { redirect } from 'react-router-dom';
import { parseFile } from 'common/utils';

export const STATE = {
    parsedFile: {},
};

async function PARSE_FILE(rawFile) {
    const parsedFile = await parseFile(rawFile);
    STATE.parsedFile = parsedFile;
    return parsedFile;
}

async function SUBMIT_FORM({ request }) {
    console.log('request', request);
    return redirect('/');
}

export const ACTIONS = {
    PARSE_FILE,
    SUBMIT_FORM,
};