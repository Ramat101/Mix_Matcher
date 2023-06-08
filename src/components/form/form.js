import './form.scss';

function Form() {
    return (
        <>
            <header>
                <h2 className="header-2">MATCH GENERATOR</h2>
            </header>
            <form>
                <label className="fileSelectorWrapper formElement button">
                    <span>Upload an Event Feedback Form</span>
                    <input type="file" placeholder="Upload and Event Feedback Form" />
                </label>
                <button className="formElement button submitButton" type="submit">Generate Matches</button>
            </form>
        </>
    );
}

export default Form;