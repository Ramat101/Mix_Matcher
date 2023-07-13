import { useState } from 'react';
import FileSelector from 'components/fileSelector';

import './form.scss';

function Form() {
    const [selectedFile, setSelectedFile] = useState();

    function handleFileSelection(file) {
        setSelectedFile(file);
        console.log('selected file', file);
    }

    return (
        <>
            <header>
                <h2 className="header2">Match generator</h2>
            </header>
            <form>
                <div className="formControl">
                    <FileSelector onChange={handleFileSelection} />
                    { (selectedFile && selectedFile.errorMessage) ? <span className="validationMessage">{ selectedFile.errorMessage }</span> : null }
                </div>
                <button disabled={!selectedFile || selectedFile.errorMessage} className="formElement button submitButton" type="submit">Generate matches</button>
            </form>
        </>
    );
}

export default Form;