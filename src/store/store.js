import { redirect } from 'react-router-dom';
import { parseFile, fakeNetwork } from 'common/utils';

export const STATE = {
    parsedFile: {},
};

const PARSE_FILE = async (rawFile)=>  {
    const parsedFile = await parseFile(rawFile);
    STATE.parsedFile = parsedFile;
    return parsedFile;
}

const SUBMIT_FORM = async () => {
    await fakeNetwork(undefined, 3000)
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