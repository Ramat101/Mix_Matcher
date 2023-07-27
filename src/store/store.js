import { redirect } from 'react-router-dom';
import { fakeNetwork, generateMatches } from 'common/utils';

// to-do: replace with real state management solution

export const STATE = {
    selectedFile: {},
    matches: [],
};

const SET_SELECTED_FILE = (file) => {
    STATE.selectedFile = file.parsedFile;
};

const GET_SELECTED_FILE = () => {
    return STATE.selectedFile;
};

const SET_MATCHES = (matches) => {
    STATE.matches = matches;
};

const GET_MATCHES = () => {
    return STATE.matches;
};

const GENERATE_MATCHES = async (parsedFile) => {
    const matches = generateMatches(parsedFile);
    SET_MATCHES(matches);
}

const SUBMIT_FORM = async () => {
    await fakeNetwork(undefined, 3000);
    await GENERATE_MATCHES(GET_SELECTED_FILE());
    return redirect('./results');
}

export const ACTIONS = {
    SUBMIT_FORM,
    SET_SELECTED_FILE,
    GET_MATCHES,
};