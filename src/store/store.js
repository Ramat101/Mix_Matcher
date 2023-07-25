import { redirect } from 'react-router-dom';
import { parseFile, fakeNetwork, generateMatches } from 'common/utils';

export const STATE = {
    parsedFile: {},
};
const PARSE_FILE = async (rawFile)=>  {
    const parsedFile = await parseFile(rawFile);
    console.log('parsed file', parsedFile);
    STATE.parsedFile = parsedFile;
    return parsedFile;
}

const GENERATE_MATCHES = () => {
    const matches = generateMatches(STATE.parsedFile);
}

const SUBMIT_FORM = async () => {
    await fakeNetwork(undefined, 3000);
    GENERATE_MATCHES();
    return redirect('./results');
}

const LOAD_RESULTS = async () => {
    return STATE.parsedFile;
}

export const ACTIONS = {
    PARSE_FILE,
    SUBMIT_FORM,
    LOAD_RESULTS,
};