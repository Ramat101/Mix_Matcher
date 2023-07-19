import { useState } from 'react';
import { Form as ReactRouterForm } from 'react-router-dom';

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
            {/* Client Side Routing */}
            <ReactRouterForm method="post" id="matchGeneratorForm">
                <div className="formControl">
                    <FileSelector onChange={handleFileSelection} cms={ fileSelectorInputCMS } />
                    { (selectedFile && selectedFile.error) ? <span className="validationMessage">{ getErrorMessage(fileSelectorInputCMS, selectedFile.error) }</span> : null }
                </div>
                <button disabled={!selectedFile || selectedFile.error} className="formElement button submitButton" type="submit">{ cms.submitButton }</button>
            </ReactRouterForm>
        </>
    );
}

export default Form;