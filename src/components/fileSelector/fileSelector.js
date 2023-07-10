import { useRef, useState } from 'react';

import './fileSelector.scss';

const FILE_PLACEHOLDER = {
    isFileSelected: false,
    label: 'Upload an event feedback form',
    icon: 'drive_folder_upload',
};
const FILE_SELECTED = {
    isFileSelected: true,
    label: '',
    icon: 'file_download_done',
};

function FileSelector({ onChange }) {
    const fileSelectorRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState({ ...FILE_PLACEHOLDER });

    function handleFileSelection() {
        const selectedFile = fileSelectorRef.current?.files?.length && fileSelectorRef.current.files[0];
        setSelectedFile(selectedFile ? { ...FILE_SELECTED, label: selectedFile.name } : { ...FILE_PLACEHOLDER });
        onChange(!!selectedFile);     
    }

    return (
        <label className="formElement fileSelectorWrapper button">
            <p>
                <span>{selectedFile.label}</span>
                <span class={`${selectedFile.isFileSelected ? 'green' : 'md-dark' } material-symbols-outlined material-icons md-36`}>{ selectedFile.icon }</span>
            </p>
            <input type="file" accept=".csv" placeholder={selectedFile.label} ref={fileSelectorRef} onChange={handleFileSelection} />
        </label>
    );
}

export default FileSelector;