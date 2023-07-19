import { fakeNetwork } from "./utils";

const CMS = {
    header: {
        heading: 'Mix & Matcher',
        subheading: 'The perfect blend',
    },
    main: {
        heading: 'Match generator',
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
    }
};

async function getCMS() {
    await fakeNetwork();
    return CMS;
}

export async function cmsLoader() {
    const CMS = await getCMS();
    return { CMS };
}



export default CMS;