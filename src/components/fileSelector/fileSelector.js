import { useRef, useState } from 'react';

import { csvParse } from 'd3';

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

    async function parseFile(file) {
        if (!file) {
            throw new Error({message: 'File not supplied'});
        } else if (!(file instanceof Blob)) {
            throw new TypeError({ message: 'Expected a Blob' })
        } else {
            // convert file to text
            try {
                const fileAsText = await file.text();
                
                // parse the file
                try {
                    return await csvParse(fileAsText);
                } catch {
                    throw new Error({ message: 'Couln\'t parse the file'});
                }
            
            } catch {
                throw new Error({ message: 'Couldn\'t read the file'});
            }
        }

    }

    async function handleFileSelection() {
        let errorMessage = 'File not supplied';
        let parsedFile;
        let result;

        const rawFile = fileSelectorRef.current?.files?.length && fileSelectorRef.current.files[0];
        if (rawFile) {
             // parse the file
             try {
                parsedFile = await parseFile(rawFile);
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