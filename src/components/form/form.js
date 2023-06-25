import './form.scss';

function Form() {
    return (
        <>
            <header>
                <h2 className="header-2">Match generator</h2>
            </header>
            <form>
                <label className="fileSelectorWrapper formElement button">
                    <p>
                        <span>Upload an event feedback form</span>
                        <span class="material-symbols-outlined material-icons md-36 md-dark">drive_folder_upload</span>
                    </p>
                    <input type="file" placeholder="Upload and Event Feedback Form" />
                </label>
                <button className="formElement button submitButton" type="submit">Generate matches</button>
            </form>
        </>
    );
}

export default Form;