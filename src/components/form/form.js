import { useState } from 'react';

import FileSelector from 'components/fileSelector';

import './form.scss';

function Form({ cms }) {
    const [selectedFile, setSelectedFile] = useState();

    function handleFileSelection(file) {
        setSelectedFile(file);
        console.log('selected file', file);
    }

    function getErrorMessage(fileSelectorInputCMS, error) {    
        if (!(fileSelectorInputCMS || error)) {
            return '';
        }
        const errorMessages = fileSelectorInputCMS.errorMessages?.parseFileExceptions || [];
        const { cause } = error;

        return errorMessages[cause];
    }

    const { controls: { fileSelectorInput: fileSelectorInputCMS }} = cms;
    return (
        <>
            <header>
                <h2 className="header2">{ cms.heading }</h2>
            </header>
            <form>
                <div className="formControl">
                    <FileSelector onChange={handleFileSelection} cms={ fileSelectorInputCMS } />
                    { (selectedFile && selectedFile.error) ? <span className="validationMessage">{ getErrorMessage(fileSelectorInputCMS, selectedFile.error) }</span> : null }
                </div>
                <button disabled={!selectedFile || selectedFile.error} className="formElement button submitButton" type="submit">Generate matches</button>
            </form>
        </>
    );
}

export default Form;