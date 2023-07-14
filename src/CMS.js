const CMS = {
    header: {
        heading: 'Mix & Matcher',
        subheading: 'The perfect blend',
    },
    main: {
        form: {
            heading: 'Match generator',
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
        },
    }
};

export default CMS;