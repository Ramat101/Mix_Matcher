import { createContext } from "react";

import { fakeNetwork } from "./utils";

const CMS = {
    header: {
        heading: 'Mix & Matcher',
        subheading: 'The perfect blend',
    },
    main: {
        subheading: {
            index: 'Match generator',
            loading: 'Blending matches . . .',
            results: 'Results',
        },
        form: {
            controls: {
                fileSelectorInput: {
                    label: 'Upload an event feedback form',
                    icon: 'drive_folder_upload',
                    iconSuccess: 'file_download_done',
                    errorMessages: {
                        parseFileExceptions: [
                            'Please selecte a file',
                            'Invalid file type',
                            'Error reading file',
                            'Error parsing file',
                        ],
                    }
                },
            },
            submitButton: 'Generate matches',
        },
        results: {
            title: 'Matches',
            searchInput: {
                placeholder: 'Find participant',
            },
            email: {
                subject: 'Your event matches',
                body: {
                    introduction: 'Hi ',
                    generic: ', \n\nThanks for joining the event. Enclosed are your matches. Let me know if you would like to move ahead with any of these suggestions. \n \n',
                    matches: 'Matches: ',
                    maybes: '. \nAlso consider: ',
                    noMatches: ', \n\nThank you for joining the event. There were no matches for you at this time. We look forward to seeing you at future events.',
                }
            },
        },
    },
    error: {
        heading: 'Oops!',
        body: 'Sorry, an unexpected error has occurred.',
    },
};

const getCMS = async () => {
    await fakeNetwork();
    return CMS;
}

export const cmsLoader = async () => {
    const CMS = await getCMS();
    return { CMS };
}

export const CMSContext = createContext(CMS);

export const CMSProvider = ({ children }) => {
    return (
        <CMSContext.Provider value={CMS}>
            {children}
        </CMSContext.Provider>
    );
}

export default CMS;