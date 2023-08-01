import { useRef, useState } from 'react';
import { path } from 'ramda';

import { PARSE_FILE_EXCEPTIONS, parseFile } from 'common/utils';

import './fileSelector.scss';

function FileSelector({ onChange, cms }) {
    const FILE_PLACEHOLDER = {
        touched: false,
        label: cms.label,
        icon: cms.icon,
    };
    const FILE_SELECTED = {
        touched: false,
        icon: cms.iconSuccess,
    };

    const fileSelectorRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState({ ...FILE_PLACEHOLDER });

    async function handleFileSelection() {
        let parseFileException = { ...PARSE_FILE_EXCEPTIONS.MISSING_FILE_EXCEPTION }
        let parsedFile;
        let result;

        const rawFile = path(['current', 'files', 0], fileSelectorRef);        
        if (rawFile) {
             // parse the file
             try {
                parsedFile = await parseFile(rawFile);
                parseFileException = false;
            } catch (error) {
                parseFileException = error;
            }
        }

        result = parseFileException ? { ...FILE_PLACEHOLDER, error: parseFileException, touched: true } : { ...FILE_SELECTED, label: rawFile.name, parsedFile, touched: true };

        setSelectedFile(result);
        onChange(result);
    }

    return (
        <label htmlFor="fileSelector" className={`${selectedFile.error ? 'error' : 'valid' } formElement fileSelectorWrapper button`}>
            <p>
                <span>{selectedFile.label}</span>
                <span className={`${(selectedFile.touched && !selectedFile.error) ? 'green' : 'md-dark' } material-symbols-outlined material-icons md-36`}>{ selectedFile.icon }</span>
            </p>
            <input id="fileSelector" name="fileSelector" type="file" accept=".csv" ref={fileSelectorRef} onChange={handleFileSelection} required />
        </label>
    );
}

export default FileSelector;