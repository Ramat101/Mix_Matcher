import { useState } from 'react';
import FileSelector from 'components/fileSelector';

import './form.scss';

function Form() {
    const [isFileSelected, setIsFileSelected] = useState(false);

    function handleFileSelection(isFileSelected) {
        setIsFileSelected(isFileSelected);    
    }

    return (
        <>
            <header>
                <h2 className="header-2">Match generator</h2>
            </header>
            <form>
                <FileSelector onChange={handleFileSelection} />
                <button disabled={!isFileSelected} className="formElement button submitButton" type="submit">Generate matches</button>
            </form>
        </>
    );
}

export default Form;