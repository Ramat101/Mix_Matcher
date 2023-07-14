import { useRef, useState } from 'react';
import { path } from 'ramda';

import UTILS from 'utils';

import './fileSelector.scss';

const FILE_PLACEHOLDER = {
    label: 'Upload an event feedback form',
    icon: 'drive_folder_upload',
};
const FILE_SELECTED = {
    icon: 'file_download_done',
    errorMessage: '',
};

function FileSelector({ onChange }) {
    const fileSelectorRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState({ ...FILE_PLACEHOLDER });

    async function handleFileSelection() {
        let errorMessage = UTILS.PARSE_FILE_EXCEPTIONS.MISSING_FILE_EXCEPTION.message;
        let parsedFile;
        let result;

        const rawFile = path(['current', 'files', 0], fileSelectorRef);        
        if (rawFile) {
             // parse the file
             try {
                parsedFile = await UTILS.parseFile(rawFile);
                errorMessage = '';
            } catch ({ message }) {
                errorMessage = message;
            }
        }

        result = errorMessage ? { ...FILE_PLACEHOLDER, errorMessage } : { ...FILE_SELECTED, label: rawFile.name, parsedFile };

        setSelectedFile(result);
        onChange(result);
    }

    return (
        <label className={`${selectedFile.errorMessage ? 'error' : 'valid' } formElement fileSelectorWrapper button`}>
            <p>
                <span>{selectedFile.label}</span>
                <span className={`${selectedFile.parsedFile ? 'green' : 'md-dark' } material-symbols-outlined material-icons md-36`}>{ selectedFile.icon }</span>
            </p>
            <input type="file" accept=".csv" placeholder={selectedFile.label} ref={fileSelectorRef} onChange={handleFileSelection} required />
        </label>
    );
}

export default FileSelector;