import { useRef, useState } from 'react';

import './form.scss';

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

function Form() {
    const fileSelectorRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState({ ...FILE_PLACEHOLDER });

    function handleFileSelection() {
        const selectedFile = fileSelectorRef.current?.files?.length && fileSelectorRef.current.files[0];
        setSelectedFile(selectedFile ? { ...FILE_SELECTED, label: selectedFile.name } : { ...FILE_PLACEHOLDER });        
    }

    return (
        <>
            <header>
                <h2 className="header-2">Match generator</h2>
            </header>
            <form>
                <label className="fileSelectorWrapper formElement button">
                    <p>
                        <span>{selectedFile.label}</span>
                        <span class={`${selectedFile.isFileSelected ? 'green' : 'md-dark' } material-symbols-outlined material-icons md-36`}>{ selectedFile.icon }</span>
                    </p>
                    <input type="file" accept=".csv" placeholder="Upload and Event Feedback Form" ref={fileSelectorRef} onChange={handleFileSelection} />
                </label>
                <button disabled={!selectedFile.isFileSelected} className={`${selectedFile.isFileSelected ? '' : 'disabled' } formElement button submitButton`} type="submit">Generate matches</button>
            </form>
        </>
    );
}

export default Form;