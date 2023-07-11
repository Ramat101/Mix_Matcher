import { useRef, useState } from 'react';

import { csvParse } from 'd3';

import './fileSelector.scss';

const FILE_PLACEHOLDER = {
    isFileSelected: false,
    label: 'Upload an event feedback form',
    icon: 'drive_folder_upload',
    parsedFile: '',
};
const FILE_SELECTED = {
    isFileSelected: true,
    label: '',
    icon: 'file_download_done',
    parsedFile: '',
};

function FileSelector({ onChange }) {
    const fileSelectorRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState({ ...FILE_PLACEHOLDER });

    async function parseFile(file) {
        if (!file) {
            throw new Error({ message: 'File not supplied'});
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
        let result;
        const selectedFile = fileSelectorRef.current?.files?.length && fileSelectorRef.current.files[0];

        if (!selectedFile) {
            result = { ...FILE_PLACEHOLDER };
            onChange(undefined);     
        } else {
            // parse the file
            const parsedFile = await parseFile(selectedFile);
            console.log('selected file', parsedFile);
            result = { ...FILE_SELECTED, label: selectedFile.name, parsedFile };
            onChange(result);
        }

        setSelectedFile(result);
    }

    return (
        <label className="formElement fileSelectorWrapper button">
            <p>
                <span>{selectedFile.label}</span>
                <span className={`${selectedFile.isFileSelected ? 'green' : 'md-dark' } material-symbols-outlined material-icons md-36`}>{ selectedFile.icon }</span>
            </p>
            <input type="file" accept=".csv" placeholder={selectedFile.label} ref={fileSelectorRef} onChange={handleFileSelection} />
        </label>
    );
}

export default FileSelector;